import React, { Component } from "react";
import Chart from "react-apexcharts";
import Config from "./config";
import { getPrefecture, getPopulation } from "./apiFetch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-line",
        },
        xaxis: {
          title: {
            text: "年度",
          },
          type: "datetime",
          labels: {
            formatter: function (value: string, timestamp: string, opts) {
              return opts.dateFormatter(new Date(timestamp), "yyyy");
            },
          },
        },
        yaxis: {
          title: {
            text: "総人口",
          },
        },
      },
      series: [
        {
          show: true,
          name: "東京都",
          code: 13,
          data: [
            { x: "1/1/1990", y: 0 },
            { x: "1/1/2000", y: 10 },
            { x: "1/1/2010", y: 30 },
          ],
        },
        {
          show: true,
          name: "大阪府",
          code: 15,
          data: [
            { x: "1/1/1990", y: 0 },
            { x: "1/1/2000", y: 100 },
            { x: "1/1/2010", y: 300 },
          ],
        },
      ],
    };
  }

  render() {
    console.log("Prefecture");
    console.log(getPrefecture());
    console.log("Population");
    console.log(getPopulation());
    console.log("apiKey");
    console.log(Config.apiKey);
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
