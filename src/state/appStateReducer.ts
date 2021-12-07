import { nanoid } from 'nanoid';
import { ReducerAction } from './reducerActions';
import { findItemIndexById } from '../utils/arrayUtils';


export type Action = {
    id: string 
    text: string 
}

export type List = {
    id: string 
    text: string 
    actions: Action[]
}

export type AppState = {
    lists: List[]
}

export const appStateReducer = (draft: AppState, action: ReducerAction ): AppState | void => {
    switch (action.type) {
        case 'ADD_LIST': 
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                actions: [],
            })
            break;
        case 'ADD_ACTION': 
            const { text, listId } = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            draft.lists[targetListIndex].actions.push({
                id: nanoid(),
                text
            });
            break;
        default: 
            break;
    }
}
