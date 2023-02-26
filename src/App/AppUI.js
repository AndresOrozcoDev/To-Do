import { Fragment, useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import ToDoCounter from '../components/ToDoCounter/ToDoCounter';
import ToDoSearch from '../components/ToDoSearch/ToDoSearch';
import ToDoList from '../components/ToDoList/ToDoList';
import ToDoItem from '../components/ToDoItem/ToDoItem';
import CreateToDoButton from '../components/CreateToDoButton/CreateToDoButton';
import Modal from '../modal/index';
import ToDoForm from '../components/ToDoForm/ToDoForm';

function AppUI() {

    const value = useContext(ToDoContext)

    return(
        <Fragment>

            <ToDoCounter />
        
            <ToDoSearch />

            <ToDoList>
                {value.error && <p>Error...</p>}
                {value.loading && <p>Cargado...</p>}
                {(!value.loading && !value.searchedToDo.length) && <p>Crear tu primer ToDo</p>}

                {value.searchedToDo.map( element => (
                <ToDoItem 
                    key={element.text} 
                    item={element}
                    onComplete={() => value.completeToDo(element.text)}
                    onDelete={() => value.deleteToDo(element.text)}
                />
                ))}
            </ToDoList>

            {value.openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDoButton setOpenModal={value.setOpenModal} />

        </Fragment>
    )
}
 
export default AppUI;