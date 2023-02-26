import React, { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {

    const value = useContext(ToDoContext)

    return(
        <h2 className='TodoCounter'>Has completado {value.completedToDo} de {value.totalToDo} To Do</h2>
    )
};

export default ToDoCounter;