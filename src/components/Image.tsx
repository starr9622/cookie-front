import * as React from "react";
import { ImageProps } from "../types";

export default function Image(props: ImageProps) {
  return <img src={props.path} alt={props.alt} />;
}
