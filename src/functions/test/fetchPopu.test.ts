import Config from "../../config";
import { popudata, prefcode, label } from "./data/popuData";
import api from "../../apis/repositoryFactory";

test("Connect to RESAS API:", async () => {
  const res = await api.popu.getPopulation(prefcode);
  expect(res.data.result.data[0].label).toStrictEqual(label);
  expect(res.data.result.data[0].data.slice(0, popudata.length)).toStrictEqual(
    popudata
  );
});

export {};
