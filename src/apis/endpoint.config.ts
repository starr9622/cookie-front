const SEVER = "";
const API_PREFLX = "";
const path = require('path');

interface Config {
  searchItem(): string;
  mainImage(): string;
  listItem(): string;
}

const config: Config = {
  searchItem: () => path.join(__dirname,"/src/mock/search.json"),
  mainImage: () => path.join(__dirname,"src/mock/main.json"),
  listItem: () => path.join(__dirname,"src/mock/list.json"),
};

export default config;
