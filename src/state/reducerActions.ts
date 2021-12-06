export type ReducerAction = 
    | {
        type: "ADD_LIST"
        payload: string
    }
    | {
        type: "ADD_ACTION"
        payload: { text: string, listId: string }
    }

export const addList = ( text: string ): ReducerAction => ({ 
    type: "ADD_LIST",
    payload: text,
})

export const addAction = ( text: string, listId: string ): ReducerAction => ({
    type: "ADD_ACTION",
    payload: {
        text,
        listId,
    }
})

