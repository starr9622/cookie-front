import { fork, all, take, race, delay, put } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";

function* searchWorkflow() {
  // while (true) {

  // }
  console.log('test')
}

export default function* () {
  yield fork(searchWorkflow);
}
