import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton(props) {

    const openModal = () => {
        props.setOpenModal(prevState => !prevState);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            onClick={openModal}
        >
            +
        </button>
    )
};

export default CreateToDoButton;