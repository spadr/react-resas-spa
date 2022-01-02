import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import Config from "./config";
import { parsePrefecture } from "./functions/parsePref";
import { parsePopulation } from "./functions/parsePopu";
import api from "./apis/repositoryFactory";

import { _seriesXY, _Series, _Population, _Prefecture } from "./types";
import { StyledCheckBox, StyledTitle, StyledMiniTitle } from "./styles";
import { options } from "./chartOptions";

function App() {
  const [series, setSeries] = useState<_Series[]>([]);

  useEffect(() => {
    api.pref
      .getPrefecture()
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
    if (series[index - 1].isntLoad) {
      api.popu
        .getPopulation(index)
        .then((res2) => {
          const res_data: _Population = res2.data.result;
          const series_copy = series.slice();
          const init = parsePopulation(res_data);
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
