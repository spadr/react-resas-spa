type _Config = {
  apiKey: string;
  nodeEnv: string;
  pageTitle: string;
  endPointPrefecture: string;
  endPointPopulation: string;
  endPointPopulationParameter1: string;
  endPointPopulationParameter2: string;
  endPointPopulationParameter1Value: string;
  endPointPopulationParameter2Value: string;
  plotTitle: string;
  plotLabelX: string;
  plotLabelY: string;
};

const Config: _Config = {
  nodeEnv: process.env.NODE_ENV || "NotDefined",
  apiKey: process.env.REACT_APP_RESAS_API_KEY || "NotDefined",
  pageTitle: process.env.REACT_APP_PAGE_TITLE || "NotDefined",
  endPointPrefecture:
    process.env.REACT_APP_END_POINT_PREFECTURE ||
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
  endPointPopulation:
    process.env.REACT_APP_END_POINT_POPULATION ||
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
  endPointPopulationParameter1:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER1 || "prefCode",
  endPointPopulationParameter2:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER2 || "cityCode",
  endPointPopulationParameter1Value:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER1_VALUE || "NotDefined",
  endPointPopulationParameter2Value:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER2_VALUE || "-",
  plotTitle: process.env.REACT_APP_PLOT_TITLE || "人口構成",
  plotLabelX: process.env.REACT_APP_PLOT_LABEL_X || "年度",
  plotLabelY: process.env.REACT_APP_PLOT_LABEL_Y || "人口数",
};

export default Config;
