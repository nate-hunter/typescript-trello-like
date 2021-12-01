import { useState } from 'react';
import { AddItemButton } from './styles';

type AddNewItemProps = {
    onAdd(text: string): void 
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;

    if (showForm) {
        // show create item form 
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        </AddItemButton>
    );
}