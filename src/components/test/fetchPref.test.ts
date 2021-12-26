import axios from "axios";
import Config from "../../config";
import { prefdata } from "./data/prefData";

const url = Config.endPointPrefecture;

test("Connect to RESAS API:" + url, async () => {
  axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
  const res = await axios.get(url);
  expect(res.data.result).toStrictEqual(prefdata);
});

export {};
