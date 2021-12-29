interface _Options {
  chart: { id: string };
  legend: {
    position: "right" | "top" | "bottom" | "left" | undefined;
    inverseOrder: boolean;
    showForSingleSeries: boolean;
  };
  yaxis: {
    title: {
      text: string;
    };
  };
  xaxis: {
    title: {
      text: string;
    };
  };
}

export type { _seriesXY, _Series, _Population, _Prefecture, _Options };
>>>>>>> test
