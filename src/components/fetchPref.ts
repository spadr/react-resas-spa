import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Config from "../config";

interface _Prefecture {
  prefCode: number;
  prefName: string;
}

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
