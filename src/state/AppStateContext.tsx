import { createContext, useContext, FC, useReducer, Dispatch } from "react";
import { appStateReducer, AppState, Action, List } from "./appStateReducer";
import { ReducerAction } from './reducerActions';


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

type AppStateContextProps = {
    lists: List[] 
    getActionsByListId(id: string): Action[]
    dispatch: Dispatch<ReducerAction>
}
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(appStateReducer, appData);
    const { lists } = state;

    const getActionsByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.actions || [];
    }

    return (
        <AppStateContext.Provider value={{ lists, getActionsByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext);
}