import * as React from "react";
import { EmptyProps } from "../types";

export default function EmptyList(props: EmptyProps) {
  return <div className="emptyList">검색 된 {props.info} 정보가 없습니다.</div>;
}
