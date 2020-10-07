import * as React from "react";
import Panel from "./SearchPanel";

export default function SearchArea() {
  const [search, setSearch] = React.useState<string>();

  const onChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  function List(props: any) {
    if (props.search) {
      return <Panel search={props.search} />;
    }
    return <></>;
  }

  return (
    <>
      <div className="searchWrap">
        <input
          onChange={onChangeValue}
          type="text"
          placeholder="검색어를 입력하세요."
        />
        <button>검색</button>
        <List search={search} />
      </div>
    </>
  );
}
