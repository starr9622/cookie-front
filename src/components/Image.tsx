import * as React from "react";

export interface ImageProps {
  path: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  return (
    <div className="mainImgWrap">
      <img src={props.path} alt={props.alt} />
    </div>
  );
}
