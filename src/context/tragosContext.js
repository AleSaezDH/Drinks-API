import React, { createContext, useEffect, useState } from 'react';

export const tragosContext = createContext();

function TragosProvider ({children}) {

    const [busqueda, setBusqueda] = useState({ingrediente:'', cat: ''});
    const [dato, setDato] = useState([]);

    const {ingrediente, cat} = busqueda;

    useEffect( async () => {
        if (Object.keys(busqueda).length !== 0) {
                let consulta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${cat}`)
                let datos = await consulta.json()
                setDato(datos.drinks);
        }
    }, [busqueda]);

    return (
        <tragosContext.Provider value={{setBusqueda, dato}}>
            {children}
        </tragosContext.Provider>
    );
}

export default TragosProvider;