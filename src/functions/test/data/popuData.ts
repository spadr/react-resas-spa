const prefcode = 13;

const label = "総人口";

//boundaryYear以前のデータ
const popudata = [
  { value: 9683802, year: 1960 },
  { value: 10869244, year: 1965 },
  { value: 11408071, year: 1970 },
  { value: 11673554, year: 1975 },
  { value: 11618281, year: 1980 },
  { value: 11829363, year: 1985 },
  { value: 11855563, year: 1990 },
  { value: 11773605, year: 1995 },
  { value: 12064101, year: 2000 },
  { value: 12576601, year: 2005 },
  { value: 13159388, year: 2010 },
  { value: 13515271, year: 2015 },
];

const re_popudata = [
  { x: 1960, y: 9683802 },
  { x: 1965, y: 10869244 },
  { x: 1970, y: 11408071 },
  { x: 1975, y: 11673554 },
  { x: 1980, y: 11618281 },
  { x: 1985, y: 11829363 },
  { x: 1990, y: 11855563 },
  { x: 1995, y: 11773605 },
  { x: 2000, y: 12064101 },
  { x: 2005, y: 12576601 },
  { x: 2010, y: 13159388 },
  { x: 2015, y: 13515271 },
];

const fulldata = {
  boundaryYear: 2015,
  data: [
    {
      data: [
        { value: 9683802, year: 1960 },
        { value: 10869244, year: 1965 },
        { value: 11408071, year: 1970 },
        { value: 11673554, year: 1975 },
        { value: 11618281, year: 1980 },
        { value: 11829363, year: 1985 },
        { value: 11855563, year: 1990 },
        { value: 11773605, year: 1995 },
        { value: 12064101, year: 2000 },
        { value: 12576601, year: 2005 },
        { value: 13159388, year: 2010 },
        { value: 13515271, year: 2015 },
        { value: 13732951, year: 2020 },
        { value: 13845936, year: 2025 },
        { value: 13882538, year: 2030 },
        { value: 13851782, year: 2035 },
        { value: 13758624, year: 2040 },
        { value: 13606683, year: 2045 },
      ],
      label: "総人口",
    },
  ],
};

export { popudata, prefcode, label, fulldata, re_popudata };
