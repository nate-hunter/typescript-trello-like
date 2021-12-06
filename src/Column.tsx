
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";


type ColumnProps = {
  text: string
  id: string
}

export const Column = ({ text, id }: ColumnProps) => {
  const { getActionsByListId } = useAppState();

  const actions = getActionsByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {actions.map(action => (
        <Card key={action.id} text={action.text} id={action.id} />
      ))}
      <AddNewItem 
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}