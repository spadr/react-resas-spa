import { parsePrefecture } from "../parsePref";
import { prefdata } from "./data/prefData";
import { parseddata } from "./data/parsedData";

test("Parse PrefectureData:", () => {
  const r = parsePrefecture(prefdata);
  expect(r).toStrictEqual(parseddata);
});

export {};
