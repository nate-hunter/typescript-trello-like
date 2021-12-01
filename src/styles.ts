import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #c5c5fc;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  background-color: #e6e6e6;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 6px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #e6e6e6;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? '#000000' : '#ffffff' )};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background-color: #6565f6;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #ffffff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #9595f9 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;




