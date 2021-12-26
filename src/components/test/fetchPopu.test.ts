import axios from "axios";
import Config from "../../config";
import { popudata, prefcode, label } from "./data/popuData";

const url = (index: number): string =>
  Config.endPointPopulation +
  "?" +
  Config.endPointPopulationParameter1 +
  "=" +
  index +
  "&" +
  Config.endPointPopulationParameter2 +
  "=" +
  Config.endPointPopulationParameter2Value;

test("Connect to RESAS API:" + url(prefcode), async () => {
  axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
  const res = await axios.get(url(prefcode));
  expect(res.data.result.data[0].label).toStrictEqual(label);
  expect(res.data.result.data[0].data.slice(0, popudata.length)).toStrictEqual(
    popudata
  );
});

export {};
