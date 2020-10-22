import * as React from "react";
import Image from "./Image";
import { propsCard } from "../types";

export default function Card(props: propsCard) {
  return (
    <div className="itemWrap">
      <div className="itemCard">
        <Image path={props.image} alt="test" />
      </div>
      <span>{props.name}</span>
    </div>
  );
}