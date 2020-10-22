import * as React from "react";
import Card from "./Card";
import { propsGridList } from "../types";

export default function GridList(props: propsGridList) {
  const list = props.list;

  return (
    <div className="gridCardList">
      {list.map((item, index) => (
        <Card key={index} image={item.image} name={item.name} />
      ))}
    </div>
  );
}
