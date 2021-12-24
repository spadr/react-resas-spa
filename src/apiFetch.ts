import { useState } from "react";
import Config from "./config";

type _Prefecture = {
  message: string;
  result: [
    {
      prefCode: number;
      prefName: string;
    }
  ];
};

type _Population = {
  message: string;
  result: [
    {
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
  ];
};

async function getPopulation(
  prefcode: string = Config.endPointPopulationParameter1Value,
  citycode: string = Config.endPointPopulationParameter2Value
) {
  const url =
    Config.endPointPopulation +
    "?" +
    Config.endPointPopulationParameter1 +
    "=" +
    prefcode +
    "&" +
    Config.endPointPopulationParameter2 +
    "=" +
    citycode;

  const res: Response = await fetch(url, {
    headers: { "X-API-KEY": Config.apiKey },
  });

  if (res.ok) {
    const data = (await res.json()) as _Population;
    return await data;
  } else {
    console.error("Could not GET data");
  }
}

async function getPrefecture() {
  const res: Response = await fetch(Config.endPointPrefecture, {
    headers: { "X-API-KEY": Config.apiKey },
  });

  if (res.ok) {
    const data = (await res.json()) as _Prefecture;
    return await data;
  } else {
    console.error("Could not GET data");
  }
}

export { getPrefecture, getPopulation };
