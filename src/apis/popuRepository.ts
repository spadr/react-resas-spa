import { AxiosPromise } from "axios";
import repository from "../apis/repository";
import Config from "../config";
import {
  _seriesXY,
  _Series,
  _Population,
  _FetchPopulation,
  _Prefecture,
  _Options,
} from "../types";

export default class PopuRepository {
  public getPopulation(index: number): AxiosPromise<_FetchPopulation> {
    const popuUrl: string =
      Config.endPointPopulation +
      "?" +
      Config.endPointPopulationParameter1 +
      "=" +
      index + //都道府県コードは1から
      "&" +
      Config.endPointPopulationParameter2 +
      "=" +
      Config.endPointPopulationParameter2Value;
    return repository.get<_FetchPopulation>(`${popuUrl}`);
  }
}
