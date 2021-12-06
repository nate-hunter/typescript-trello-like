import { ReducerAction } from './reducerActions';


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

export const appStateReducer = (state: AppState, action: ReducerAction ): AppState => {
    switch (action.type) {
        // ...
        default: 
            return state;
    }
}
