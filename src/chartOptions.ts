import Config from "./config";
import { _Options } from "./types";

const options: _Options = {
  chart: {
    id: "population-line",
  },
  legend: {
    position: "right",
    inverseOrder: true,
    showForSingleSeries: false,
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
  },
};

export { options };
