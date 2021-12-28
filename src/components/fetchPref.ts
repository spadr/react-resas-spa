import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Config from "../config";
import { _seriesXY, _Series, _Population, _Prefecture } from "../types";

async function fetchPrefecture() {
  axios.defaults.headers.get["X-API-KEY"] = Config.apiKey;
  const url = Config.endPointPrefecture;
  const res = await axios.get(url);
  const data: _Prefecture[] = res.data.result;
  return data;
  /*.catch((error) => {
        console.error("Could not GET Prefecture data");
      })*/
}

export { fetchPrefecture };
