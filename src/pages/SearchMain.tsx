import * as React from "react";
import { MainImage, SearchArea } from "../components";
import * as Api from "../apis/search"

function SearchMain() {
  const [items, setItem] = React.useState(null);

  React.useEffect( () => {
    if(!items) Api.fetchMainImage().then(e=> setItem(e.data));
  });

  if(!items) return null;
  return (
    <>
    <div className="searchMain">
    <MainImage path={items.path} alt={items.alt} />
    <SearchArea />
    </div>
    </>
  );
}




export default SearchMain;