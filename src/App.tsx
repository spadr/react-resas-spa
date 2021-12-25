import React, { Component } from "react";
import Config from "./config";

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
    },
  ];
}

interface _Series {
  series: [
    {
      show: boolean;
      name: string;
      code: number;
      data: [
        {
          x: number;
          y: number;
        }
      ];
    },
  ];
  xaxis: {
    type: string;
    title: string;
  };
  yaxis: {
    type: string;
    title: string;
  };
  boundaryYear: number;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {
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
      },
    };
  }

  componentDidMount() {
    this.getPrefecture();
    this.getPopulation(Number(Config.endPointPopulationParameter1Value));
  }

  async getPrefecture() {
    const res1: Response = await fetch(Config.endPointPrefecture, {
      headers: { "X-API-KEY": Config.apiKey },
    });

    if (res1.ok) {
      const data = (await res1.json()) as _Prefecture;
      const pref = data.result.slice();
      const init = [];

      for (let i = 0; i < pref.length; i++) {
        const tpm_init = {
          show: false,
          name: pref[i].prefName,
          code: pref[i].prefCode,
          data: [],
        };
        init.push(tpm_init);
      }
      this.setState({
        series: init,
      });
    } else {
      console.error("Could not GET Prefecture data");
    }
  }

  async getPopulation(index: number) {
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

    const res2: Response = await fetch(prefUrl, {
      headers: { "X-API-KEY": Config.apiKey },
    });

    if (res2.ok) {
      const data = (await res2.json()) as _Population;
      const series_copy = this.state.series.slice();
      const init = [];
      Object.keys(data.result.data[0].data).forEach((i) => {
        const tpm = {
          x: data.result.data[0].data[i].year,
          y: data.result.data[0].data[i].value,
        };
        init.push(tpm);
      });
      series_copy[index - 1].data = init; //配列は0から
      series_copy[index - 1].show = !series_copy[index - 1].show; //配列は0から
      this.setState({
        series: series_copy,
        boundaryYear: data.result.boundaryYear,
      });
      console.log(series_copy);
      console.log(data.result.boundaryYear);
    } else {
      console.error("Could not GET Population data");
    }
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}

export default App;
