import * as React from "react";
import { Title, GridList, EmptyList } from "../components";
import { PropsList, IStoreState } from "../types";
import { SearchArea } from "../containers";
import { useSelector } from "react-redux";

function List(props: PropsList) {
  if (props.data.length) {
    return <GridList list={props.data} />;
  }
  return <EmptyList info={props.kind} />;
}

export default function SearchList() {
  let info = useSelector((state:IStoreState) => state.itemList )
  return (
    <div className="searchListMain">
      <SearchArea />
      <div className="resultList">
        {info.map((i) => {
          return (
            <div key={i.kind}>
              <Title title={i.kind} />
              <List kind={i.kind} data={i.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
