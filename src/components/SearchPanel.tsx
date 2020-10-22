import * as React from "react";
import List from "./List";
import {propsItemList} from "../types";

export default function Panel(props: propsItemList) {
  return (
    <div className="searchPanel">
      <List list={props.list} />
    </div>
  );
}
