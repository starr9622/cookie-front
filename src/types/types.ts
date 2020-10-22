export interface ImageProps {
  path: string;
  alt: string;
}
export interface PropsList {
  kind: string;
  data: propsCard[];
}
export interface propsCard {
  image: string;
  name: string;
}
export interface propsCardList {
  kind: string;
  name: string;
}
export interface propsItemList {
  list : propsCardList[]
}
export interface propsGridList {
  list: propsCard[];
}
export interface EmptyProps {
  info: string;
}
export interface PanelProps {
  search: string;
}
export interface ListProps {
  searchName: string;
  searchKind: string;
}
export interface TitleProps {
  title: string;
}
export interface IStoreState{
  keyword : string,
  itemList: PropsList[],
  mainImage: ImageProps,
  keywordList: propsCardList[]
}