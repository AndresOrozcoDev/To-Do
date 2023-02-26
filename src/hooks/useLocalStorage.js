import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
 
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setError(true);
        }
        }, 5000)
    })

    // Metodo para almacenar en el localStorage para persistencia de datos.
    const saveItem = (newItem) => {
        try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        } catch (error) {
        setError(true);
        }
    }

    return {
        item, saveItem,
        loading, 
        error
    };

}

export default useLocalStorage;