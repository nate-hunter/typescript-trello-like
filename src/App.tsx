import { AddNewItem } from './AddNewItem';
import { AppContainer } from './styles';
import { Card } from './Card';
import { Column } from './Column';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/reducerActions';


export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map(list => (
        <Column key={list.id} text={list.text} id={list.id} />
      ))}
      <AddNewItem 
        toggleButtonText="+ Add another list" 
        onAdd={text => dispatch(addList(text))} 
      />
    </AppContainer>
  );
}
