import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

import Config from "./config";
import { parsePrefecture } from "./components/parsePref";
import { parsePopulation } from "./components/parsePopu";

import { _seriesXY, _Series, _Population, _Prefecture } from "./types";
import { StyledCheckBox, StyledTitle, StyledMiniTitle } from "./styles";
import { options } from "./chartOptions";

function App() {
  const [series, setSeries] = useState<_Series[]>([]);

  useEffect(() => {
    axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
    const url = Config.endPointPrefecture;
    console.log("fetch:" + url);
    axios
      .get(url)
      .then((res1) => {
        const parsed: _Series[] = parsePrefecture(res1.data.result);
        setSeries(parsed);
      })
      .catch((error) => {
        console.error("Could not GET Prefecture data");
        console.error(error.response.status);
        console.error(error.message);
      });
  }, []);

  const fetchPopulation = (index: number) => {
    if (series[index-1].isntLoad) {
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
      console.log("fetch:" + prefUrl);
      axios
        .get(prefUrl)
        .then((res2) => {
          const data: _Population = res2.data.result;
          const series_copy = series.slice();
          const init = parsePopulation(data);
          series_copy[index - 1].data = init; //配列は0から
          series_copy[index - 1].show = !series_copy[index - 1].show; //配列は0から
          series_copy[index - 1].isntLoad = false; //配列は0から
          setSeries(series_copy);
        })
        .catch((error) => {
          console.error("Could not GET Population data");
          console.error(error.response.status);
          console.error(error.message);
        });
    } else {
      const series_copy_ = series.slice();
      series_copy_[index - 1].show = !series_copy_[index - 1].show; //配列は0から
      setSeries(series_copy_);
    }
  };

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
      {Object.keys(series).map((i) => CheckBox(series[Number(i)]))}
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
