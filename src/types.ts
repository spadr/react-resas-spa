interface _seriesXY {
  x: number;
  y: number;
}

interface _Prefecture {
  prefCode: number;
  prefName: string;
}

interface _Population {
  boundaryYear: number;
  data: {
    data: {
      value: number;
      year: number;
    }[];
    label: string;
  }[];
}

interface _Series {
  show: boolean;
  name: string;
  code: number;
  data: _seriesXY[];
}

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
