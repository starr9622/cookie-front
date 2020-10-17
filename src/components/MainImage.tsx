import * as React from "react";
import Image from "./Image";
import { ImageProps } from "../types";

export default function MainImage(props: ImageProps) {
  return (
    <div className="mainImgWrap">
      <Image path={props.path} alt={props.alt} />
    </div>
  );
}
