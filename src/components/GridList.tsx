import * as React from "react";
import Image from "./Image";
import { propsCard, propsGridList } from "../types";

function Card(props: propsCard) {
  return (
    <div className="itemWrap">
      <div className="itemCard">
        <Image path={props.image} alt="test" />
      </div>
      <span>{props.name}</span>
    </div>
  );
}

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
