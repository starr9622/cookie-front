import * as React from "react";
import { propsItemList, ListProps } from "../types";
import { fetchKeyword, requestItemList } from "../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Item(props: ListProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <p onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      dispatch(fetchKeyword(e.currentTarget.firstChild.nodeValue));
      dispatch(requestItemList());
      history.push("/list");
    }}>
      {props.searchName}
      <span>{props.searchKind}</span>
    </p>
  );
}

function Items(props: propsItemList) {
    let list = props.list;
  return (
    <>
      {list.map((res, index) => (
        <Item searchName={res.name} searchKind={res.kind} key={index} />
      ))}
    </>
  );
}

export default Items;