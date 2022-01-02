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
  data: (
    | {
        label: string;
        data: {
          year: number;
          value: number;
        }[];
      }
    | {
        label: string;
        data: {
          year: number;
          value: number;
          rate: number;
        }[];
      }
  )[];
}

interface _FetchPrefecture {
  message: string | null;
  result: _Prefecture[];
}

interface _FetchPopulation {
  message: string | null;
  result: _Population;
}

interface _Series {
  show: boolean;
  name: string;
  code: number;
  isntLoad: boolean;
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

export type {
  _seriesXY,
  _Series,
  _Population,
  _FetchPopulation,
  _Prefecture,
  _FetchPrefecture,
  _Options,
};
