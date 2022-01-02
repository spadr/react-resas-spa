import { _seriesXY, _Series, _Population, _Prefecture } from "../types";

function parsePopulation(input: _Population) {
  const out = [];
  for (let i = 0; i < input.data[0].data.length; i++) {
    if (input.data[0].data[i].year <= input.boundaryYear) {
      const tpm: _seriesXY = {
        x: input.data[0].data[i].year,
        y: input.data[0].data[i].value,
      };
      out.push(tpm);
    }
  }
  return out;
}

export { parsePopulation };
