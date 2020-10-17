import { createAction } from 'typesafe-actions';

export const fetchList = createAction("@request/list", ()=>{
    console.log('list');
} )();

export const requestSearch = createAction(
    "@request/search",
    () => {
        return () => {
            console.log('key');
        };
    }
)();