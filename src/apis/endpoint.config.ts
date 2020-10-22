const SEVER = "";
const API_PREFLX = "";
const path = require('path');

interface Config {
  searchItem(search: string): string;
  mainImage(): string;
  listItem(search: string): string;
}

const config: Config = {
  searchItem: (search) => {
    if(search.includes("용")) return path.join(__dirname,"/src/mock/search_용.json")
    if(search.includes("마")) return path.join(__dirname,"/src/mock/search_마.json")
    return path.join(__dirname, "/src/mock/nodata.json");
  },
  mainImage: () => path.join(__dirname,"src/mock/main.json"),
  listItem: (search) => {
    if(search.includes("용")) return path.join(__dirname,"src/mock/list.json")
    if(search.includes("마")) return path.join(__dirname,"src/mock/list_마.json")
    return path.join(__dirname,"src/mock/list_nodata.json")
  },
};

export default config;
