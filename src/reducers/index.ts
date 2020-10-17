import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";
import { IStoreState } from "../types";

export const initializeState: IStoreState = {
    keyword: null,
    itemList: null
}

export const reducer = (
    state :IStoreState = initializeState,
    action: ActionType<typeof Actions>
) => {
    switch(action.type){
        case getType(Actions.fetchList):
            return {
                ...state,
                itemList: action.payload
            };
        case getType(Actions.requestSearch):
            return {
                ...state,
                keyword: action.payload
            };
        default: 
            return Object.assign({}, state)
    }

}