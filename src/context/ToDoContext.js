import { createContext,useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ToDoContext = createContext();

function ToDoProvider(props) {

    const {item: toDo, saveItem: saveToDo, loading, error} = useLocalStorage('toDoLocalStorage', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedToDo = toDo.filter( element =>
        !!element.completed
    ).length;

    const totalToDo = toDo.length;

    // Metodo para filtrar el array de ToDo's
    let searchedToDo = [];
    if(!searchValue.length >= 1){
        searchedToDo = toDo
    } else {
        searchedToDo = toDo.filter( element => {
        const toDoTextLower = element.text.toLowerCase();
        const searchTextLower = searchValue.toLowerCase();
        return toDoTextLower.includes(searchTextLower);
        })
    }

    // Metodo para marcar como Completados
    const completeToDo = (text) => {
        const toDoIndex = toDo.findIndex( element => 
        element.text === text
        )
        const newToDo = [ ...toDo ];
        newToDo[toDoIndex].completed = true;
        saveToDo(newToDo);
    }

    // Metodo para eliminar un ToDo
    const deleteToDo = (text) => {
        const toDoIndex = toDo.findIndex( element => 
        element.text === text
        )
        const newToDo = [ ...toDo ];
        newToDo.splice(toDoIndex, 1);
        saveToDo(newToDo);
    }

    // Metodo para agregar To Do.
    const addToDo = (text) => {
        const newToDo = [ ...toDo ];
        newToDo.push({
            text: text,
            completed: false
        });
        saveToDo(newToDo);
    }

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDo,
            completedToDo,
            searchValue,
            setSearchValue,
            searchedToDo,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };