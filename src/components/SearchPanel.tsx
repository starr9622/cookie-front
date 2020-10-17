import * as React from "react";
import { PanelProps, ListProps } from "../types";

function Item(props: ListProps) {
  return (
    <p>
      {props.searchName}
      <span>{props.searchKind}</span>
    </p>
  );
}

function Items(props: PanelProps) {
  const result = props.search
    ? [
        {
          name: "용감한 쿠키",
          kind: "쿠키",
        },
        {
          name: "용과 드래곤 쿠키",
          kind: "쿠키",
        },
        {
          name: "용사맛 쿠키",
          kind: "쿠키",
        },
        {
          name: "푸른 회오리 용",
          kind: "펫",
        },
        {
          name: "용의 꼬리",
          kind: "펫",
        },
      ]
    : [];

  return (
    <>
      {result.map((res, index) => (
        <Item searchName={res.name} searchKind={res.kind} key={index} />
      ))}
    </>
  );
}

export default function Panel(props: PanelProps) {
  return (
    <div className="searchPanel">
      <Items search={props.search} />
    </div>
  );
}
