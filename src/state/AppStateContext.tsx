const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            actions: [{ id: 'c0', text: 'Generate app scaffold'}]
        },
        {
            id: '1',
            text: 'In Progress',
            actions: [{ id: 'c2', text: 'Learn TypeScript' }]
        },
        {
            id: '2',
            text: 'Done',
            actions: [{ id: 'c3', text: 'Begin to use static typing' }]
        }
    ]
}

type Action = {
    id: string 
    text: string 
}

type List = {
    id: string 
    text: string 
    actions: Action[]
}

export type AppState = {
    lists: List[]
}