interface _Prefecture {
  prefCode: number;
  prefName: string;
}

interface _Series {
  show: boolean;
  name: string;
  code: number;
  data: _seriesXY[];
}

interface _seriesXY {
  x: number;
  y: number;
}

function parsePrefecture(input: _Prefecture[]) {
  const out: _Series[] = [];
  for (let i = 0; i < input.length; i++) {
    const tpm: _Series = {
      show: false,
      name: input[i].prefName,
      code: input[i].prefCode,
      data: [],
    };
    out.push(tpm);
  }
  return out;
}

export { parsePrefecture };
