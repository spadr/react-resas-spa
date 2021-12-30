import { _seriesXY, _Series, _Population, _Prefecture } from "../types";

function parsePrefecture(input: _Prefecture[]) {
  const out: _Series[] = [];
  for (let i = 0; i < input.length; i++) {
    const tpm: _Series = {
      show: false,
      isntLoad: true,
      name: input[i].prefName,
      code: input[i].prefCode,
      data: [],
    };
    out.push(tpm);
  }
  return out;
}

export { parsePrefecture };
