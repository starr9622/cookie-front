import { ActionType, getType } from "typesafe-actions";
import * as Actions from "../actions";
import { IStoreState } from "../types";

export const initializeState: IStoreState = {
    keyword: null,
    keywordList: [],
    itemList: [],
    mainImage: {path:null, alt:null}
}

export const reducer = (
    state :IStoreState = initializeState,
    action: ActionType<typeof Actions>
) => {
    switch(action.type){
        case getType(Actions.fetchItemList):
            return {
                ...state,
                itemList: action.payload
            };    
        case getType(Actions.changeKeyword):
            return {
                ...state,
                keyword: action.payload
            };
        case getType(Actions.fetchMainImage):
            return {
                ...state,
                mainImage: action.payload
            };
        case getType(Actions.searchList):
            return {
                ...state,
                keywordList: action.payload
            };
        case getType(Actions.fetchKeyword):
            return{
                ...state,
                keyword:action.payload
            }
        case getType(Actions.requestItemList):
            return {
                ...state
            };
        default: 
            return Object.assign({}, state)
    }

}