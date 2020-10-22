import { fork, all, take, race, delay, put, call, select } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";
import * as Api from "../apis/search";
import {IStoreState} from "../types";

function* fetchMainImage(){
  const { data } = yield call(Api.fetchMainImage);
  yield put(Actions.fetchMainImage(data));
}

function* searchWorkflow() {
  const memory = new Map();
  while (yield take(getType(Actions.changeKeyword))) {
    const { keyword }:IStoreState = yield select();
    const data = memory.has(keyword) ? memory.get(keyword) : yield call(Api.requestSearch, keyword);
    memory.set(keyword, memory.has(keyword) ? data : data.data)
    yield put(Actions.searchList(memory.get(keyword)))
  }
}

function* fetchItemListWorkflow(){
  while (yield take(getType(Actions.requestItemList))) {
    const { keyword }:IStoreState = yield select();
    const { data } = yield call(Api.fetchItemList, keyword);
    yield put(Actions.fetchItemList(data));
  }
}

export default function* () {
  yield fork(fetchMainImage);
  yield fork(searchWorkflow);
  yield fork(fetchItemListWorkflow);
}
