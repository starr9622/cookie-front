import { createAction } from 'typesafe-actions';

export const fetchMainImage = createAction("@request/image", (data)=>data)();

export const changeKeyword = createAction("@command/change/keyword",(data)=> data)();

export const fetchKeyword = createAction("@command/search/keyword",(data)=> data)();

export const searchList = createAction("@search/list",(data)=>data)();

export const fetchItemList = createAction("@fetch/itemList",(data)=>data)();

export const requestItemList = createAction("@request/itemList")();
