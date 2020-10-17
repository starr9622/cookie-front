import * as React from "react";
import { TitleProps } from "../types";

export default function Title(props: TitleProps) {
  return <p className="subTitle">{props.title}</p>;
}
