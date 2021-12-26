interface _Series {
  show: boolean;
  name: string;
  code: number;
  data: _prefData[];
}

interface _prefData {
  year: number;
  value: number;
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

function parsePopulation(input: _Population) {
  const out = [];
  for (let i = 0; i < input.data[0].data.length; i++) {
    if (input.data[0].data[i].year <= input.boundaryYear) {
      const tpm: _prefData = {
        x: input.data[0].data[i].year,
        y: input.data[0].data[i].value,
      };
      out.push(tpm);
    }
  }
  return out;
}

export { parsePopulation };
