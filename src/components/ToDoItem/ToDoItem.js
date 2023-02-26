import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {

    return(
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.item.completed && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${props.item.completed && 'TodoItem-p--completed'}`}>{props.item.text}</p>
            <span onClick={props.onDelete} className="Icon Icon-delete">X</span>
        </li>
    )
};

export default ToDoItem;