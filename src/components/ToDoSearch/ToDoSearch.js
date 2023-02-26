import React, { useContext } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import './ToDoSearch.css';

function ToDoSearch() {

    const value = useContext(ToDoContext);

    const onSearchValueChange = (event) => {
        value.setSearchValue(event.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Cebollas"
            value={value.searchValue}
            onChange={onSearchValueChange}
        />
    )
};

export default ToDoSearch;