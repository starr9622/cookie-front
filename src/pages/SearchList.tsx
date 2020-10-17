import * as React from "react";
import { SearchArea, Title, GridList, EmptyList } from "../components";
import { PropsList } from "../types";

function List(props: PropsList) {
  if (props.data.length) {
    return <GridList list={props.data} />;
  }
  return <EmptyList info={props.kind} />;
}

export default function SearchList() {
  let info = [
    {
      kind: "쿠키",
      data: [
        {
          name: "용감한 쿠키",
          image: "../resources/Cookies/GingerBrave.png",
        },
        {
          name: "용과 드래곤 쿠키",
          image: "../resources/Cookies/Pitaya Dragon Cookie.png",
        },
        {
          name: "용사맛 쿠키",
          image: "../resources/Cookies/Knight Cookie.png",
        },
      ],
    },
    {
      kind: "펫",
      data: [
        {
          name: "푸른 회오리 용",
          image: "../resources/Pets/Ocean Dragon.png",
        },
        {
          name: "용의 꼬리",
          image: "../resources/Pets/Silkweave Cocoon.png",
        },
      ],
    },
    { kind: "보물", data: [] },
  ];
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
