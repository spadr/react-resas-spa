type _Config = {
  apiKey: string;
  nodeEnv: string;
  baseUrl: string;
  endPointPrefecture: string;
  endPointPopulation: string;
  endPointPopulationParameter1: string;
  endPointPopulationParameter2: string;
  endPointPopulationParameter1Value: string;
  endPointPopulationParameter2Value: string;
  pageTitle: string;
  checkBoxTitle: string;
  plotTitle: string;
  plotLabelX: string;
  plotLabelY: string;
};

const Config: _Config = {
  nodeEnv: process.env.NODE_ENV || "NotDefined",
  apiKey: process.env.REACT_APP_RESAS_API_KEY || "NotDefined",
  baseUrl:
    process.env.REACT_APP_RESAS_BASE_URL ||
    "https://opendata.resas-portal.go.jp/api/v1",
  endPointPrefecture:
    process.env.REACT_APP_END_POINT_PREFECTURE || "/prefectures",
  endPointPopulation:
    process.env.REACT_APP_END_POINT_POPULATION ||
    "/population/composition/perYear",
  endPointPopulationParameter1:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER1 || "prefCode",
  endPointPopulationParameter2:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER2 || "cityCode",
  endPointPopulationParameter1Value:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER1_VALUE || "13",
  endPointPopulationParameter2Value:
    process.env.REACT_APP_END_POINT_POPULATION_PARAMETER2_VALUE || "-",
  pageTitle: process.env.REACT_APP_PAGE_TITLE || "NotDefined",
  checkBoxTitle: process.env.REACT_APP_CHECKBOX_TITLE || "NotDefined",
  plotTitle: process.env.REACT_APP_PLOT_TITLE || "人口構成",
  plotLabelX: process.env.REACT_APP_PLOT_LABEL_X || "年度",
  plotLabelY: process.env.REACT_APP_PLOT_LABEL_Y || "人口数",
};

export default Config;
