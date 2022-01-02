import axios from "axios";
import Config from "../config";

export default axios.create({
  baseURL: Config.baseUrl,
  headers: {
    "X-API-KEY": Config.apiKey,
  },
});
