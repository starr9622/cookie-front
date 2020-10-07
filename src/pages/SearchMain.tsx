import * as React from "react";
import Image from "../components/Image";
import SearchArea from "../components/SearchArea";

const img = {
  path: "../../resources/images/main.png",
  alt: "쿠키런 아이스 메인",
};

export default function SearchMain() {
  return (
    <div className="searchMain">
      <Image path={img.path} alt={img.alt} />
      <SearchArea />
    </div>
  );
}
