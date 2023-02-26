import React, { useContext, useState } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import './ToDoForm.css';

function ToDoForm() {

    const [newToDoValue, setNewToDoValue] = useState();

    const value = useContext(ToDoContext)

    const onCancel = () => {
        value.setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        value.addToDo(newToDoValue);
        value.setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TO DO </label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
};

export default ToDoForm;