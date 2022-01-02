import Config from "../../config";
import { prefdata } from "./data/prefData";
import api from "../../apis/repositoryFactory";

const url = Config.endPointPrefecture;

test("Connect to RESAS API:" + url, async () => {
  const res = await api.pref.getPrefecture();
  expect(res.data.result).toStrictEqual(prefdata);
});

export {};
