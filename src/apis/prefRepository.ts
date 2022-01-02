import { AxiosPromise } from "axios";
import repository from "../apis/repository";
import Config from "../config";
import {
  _seriesXY,
  _Series,
  _Population,
  _FetchPopulation,
  _Prefecture,
  _FetchPrefecture,
  _Options,
} from "../types";

export default class PrefRepository {
  public getPrefecture(): AxiosPromise<_FetchPrefecture> {
    return repository.get<_FetchPrefecture>(`${Config.endPointPrefecture}`);
  }
}
