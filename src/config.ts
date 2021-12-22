type _Config = {
  apiKey: string;
  nodeEnv: string;
};

const Config: _Config = {
  apiKey: process.env.REACT_APP_RESAS_API_KEY || "",
  nodeEnv: process.env.NODE_ENV || "",
};

export default Config;
