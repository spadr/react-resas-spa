import PrefRepository from "../apis/prefRepository";
import PopuRepository from "../apis/popuRepository";

export interface Repositories {
  pref: PrefRepository;
  popu: PopuRepository;
}

function getRepositories(): Repositories {
  const pref = new PrefRepository();
  const popu = new PopuRepository();
  const repositories: Repositories = {
    pref,
    popu,
  };
  return repositories;
}

export default getRepositories();
