import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../components/SearchPanel";
import { changeKeyword, requestItemList } from "../actions";
import { IStoreState } from "../types";
import { useHistory } from "react-router-dom";

function Input(){
  const dispatch = useDispatch();
  const keyword = useSelector((state:IStoreState) => state.keyword );
  return (<>
    <input
      onChange={(e: React.FormEvent<HTMLInputElement>)=>dispatch(changeKeyword(e.currentTarget.value))}
      type="text"
      placeholder="검색어를 입력하세요."
      value={keyword || ''}
    />
  </>)
}

function KeywordList() {
  const keywordList = useSelector((state:IStoreState) => state.keywordList );
  if (keywordList.length) {
    return <Panel list={keywordList} />;
  }
  return <></>;
}

export default function SearchArea() {
  let history = useHistory();
  const dispatch = useDispatch();
  const keyword = useSelector((state:IStoreState) => state.keyword );

  function handleClick() {
    if(keyword){
      dispatch(requestItemList());
      history.push("/list");
    }
  }
  return (
    <>
      <div className="searchWrap">
        <Input />
        <button onClick={handleClick}>검색</button>
        <KeywordList />
      </div>
    </>
  );
}
