import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";

import Config from "./config";

interface _prefData {
  year: number;
  value: number;
}

interface _Prefecture {
  message: string;
  result: [
    {
      prefCode: number;
      prefName: string;
    }
  ];
}

interface _Population {
  message: string;
  result: [
    {
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
  ];
}

interface _Series {
  show: boolean;
  name: string;
  code: number;
  data: _prefData[];
}

function App() {
  // Declare a new state variable, which we'll call "series" and "options"
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: "population-line",
    },
    legend: {
      position: "right",
    },
    yaxis: {
      title: {
        text: Config.plotLabelY,
      },
    },
    xaxis: {
      title: {
        text: Config.plotLabelX,
      },
      type: "datetime",
      labels: {
        formatter: function (value: string, timestamp: string, opts) {
          return opts.dateFormatter(new Date(timestamp), "yyyy");
        },
      },
    },
  });

  useEffect(() => {
    fetchPrefecture();
    //fetchPopulation(Number(Config.endPointPopulationParameter1Value));
  }, []);

  const fetchPopulation = (index: number) => {
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

    axios.get(prefUrl).then((result) => {
      const data: _Population = result.data;
      const series_copy = series.slice();
      const init: _prefData[] = [];
      Object.keys(data.result.data[0].data).forEach((i) => {
        if (data.result.data[0].data[i].year <= data.result.boundaryYear) {
          const tpm: _prefData = {
            x: data.result.data[0].data[i].year,
            y: data.result.data[0].data[i].value,
          };
          init.push(tpm);
        }
      });
      series_copy[index - 1].data = init; //配列は0から
      series_copy[index - 1].show = !series_copy[index - 1].show; //配列は0から
      setSeries(series_copy);
      console.log(series_copy);
    });
    /*.catch((error) => {
        console.error("Could not GET Population data");
      })*/
  };

  const fetchPrefecture = () => {
    axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
    const url = Config.endPointPrefecture;
    axios.get(url).then((result) => {
      const data: _Prefecture = result.data;
      const pref = data.result.slice();
      const init: _Series[] = [];
      for (let i = 0; i < pref.length; i++) {
        const tpm_init: _Series = {
          show: false,
          name: pref[i].prefName,
          code: pref[i].prefCode,
          data: [],
        };
        init.push(tpm_init);
      }
      setSeries(init);
    });
    /*.catch((error) => {
        console.error("Could not GET Prefecture data");
      })*/
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

  return (
    <div>
      <StyledTitle>{Config.pageTitle}</StyledTitle>
      <StyledMiniTitle>{Config.checkBoxTitle}</StyledMiniTitle>
      {Object.keys(plot_data).map((i) => CheckBox(plot_data[i]))}
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
