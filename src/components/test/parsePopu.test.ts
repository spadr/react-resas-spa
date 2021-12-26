import { parsePopulation } from "../parsePopu";
import { fulldata, re_popudata } from "./data/popuData";

test("Parse PopulationData:", () => {
  const r = parsePopulation(fulldata);
  expect(r).toStrictEqual(re_popudata);
});

export {};
