import React, { createContext, useEffect, useState } from 'react';

export const categoriasContext = createContext();

function ContextProvider (props) {

    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        (async () => {
            let datos = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            let categorias = await datos.json();
            setCategorias(categorias.drinks);
        })();
    }, []);

    return (
        <categoriasContext.Provider value={{categorias}}>
            {props.children}
        </categoriasContext.Provider>
    );
}

export default ContextProvider;

