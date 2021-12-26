import React, { useMemo, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";

import Config from "./config";
import { parsePrefecture } from "./components/parsePref";
import { parsePopulation } from "./components/parsePopu";

interface _seriesXY {
  x: number;
  y: number;
}


interface _Population {
  boundaryYear: number;
  data: [
    {
      label: string;
      data: [
        {
          year: number;
          value: number;
        }
      ];
    }
  ];
}

interface _Series {
  show: boolean;
  name: string;
  code: number;
  data: _seriesXY[];
}

const StyledCheckBox = styled.div`
  margin: 5px;
  display: inline-block;
`;

const StyledBox = styled.div`
  background-color: rgba(130, 130, 180, 0.01);
`;

const StyledTitle = styled.h1`
  text-align: center;
  color: rgba(70, 70, 90, 0.999);
  background-color: rgba(130, 130, 180, 0.08);
  width: 100%;
`;

const StyledMiniTitle = styled.h2`
  color: rgba(70, 70, 90, 0.999);
`;


const options = {
  chart: {
    id: "population-line",
  },
  /*legend: {
    position: right,
  },エラーになるので使えない*/
  yaxis: {
    title: {
      text: Config.plotLabelY,
    },
  },
  xaxis: {
    title: {
      text: Config.plotLabelX,
    },
  },
};

function App() {
  // Declare a new state variable, which we'll call "series" and "options"
  const [series, setSeries] = useState<_Series[]>([]);
  //const [options, setOptions] = useState({});

  useEffect(() => {
    axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
    const url = Config.endPointPrefecture;
    axios.get(url).then((res) => {
      const parsed: _Series[] = parsePrefecture(res.data.result);
      setSeries(parsed);
    });
    /*.catch((error) => {
        console.error("Could not GET Prefecture data");
      })*/

    //fetchPopulation(Number(Config.endPointPopulationParameter1Value));
  }, []);

  const fetchPopulation = (index: number) => {
    if (series[index - 1].data.length == 0) {
      axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
      const prefUrl =
        Config.endPointPopulation +
        "?" +
        Config.endPointPopulationParameter1 +
        "=" +
        index + //都道府県コードは1から
        "&" +
        Config.endPointPopulationParameter2 +
        "=" +
        Config.endPointPopulationParameter2Value;

      axios.get(prefUrl).then((res) => {
        const data: _Population = res.data.result;
        const series_copy = series.slice();
        const init = parsePopulation(data);
        series_copy[index - 1].data = init; //配列は0から
        series_copy[index - 1].show = !series_copy[index - 1].show; //配列は0から
        setSeries(series_copy);
      });
      /*.catch((error) => {
        console.error("Could not GET Population data");
      })*/
    } else {
      series_copy[index - 1].show = !series_copy[index - 1].show; //配列は0から
      setSeries(series_copy);
    }
  };

  const plot_data = series;
  const series_copy = series.slice();
  const show_series: _Series[] = [];
  for (let i = 0; i < series_copy.length; i++) {
    if (series_copy[i].show) {
      show_series.push(series_copy[i]);
    }
  }

  const CheckBox = (data: _Series) => {
    return (
      <StyledCheckBox key={data.code}>
        <input
          type="checkbox"
          checked={data.show}
          onChange={() => fetchPopulation(data.code)}
        />
        {data.name}
      </StyledCheckBox>
    );
  };

  return (
    <div>
      <StyledTitle>{Config.pageTitle}</StyledTitle>
      <StyledMiniTitle>{Config.checkBoxTitle}</StyledMiniTitle>
      {Object.keys(plot_data).map((i) => CheckBox(plot_data[Number(i)]))}
      <StyledMiniTitle>{Config.plotTitle}</StyledMiniTitle>
      <Chart
        options={options}
        series={show_series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;
