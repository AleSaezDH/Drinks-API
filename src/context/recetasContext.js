import React, { createContext, useEffect, useState } from 'react';

export const recetaContext = createContext();

function RecetaProvider ({children}) {

    const [idReceta, setIdReceta] = useState(null);
    const [datosReceta, setDatosReceta] = useState({});

    useEffect( async () => {
        if (!idReceta) return ;
            let consulta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`);
            let receta = await consulta.json();
            setDatosReceta(receta.drinks[0]);
    }, [idReceta]);

    return <recetaContext.Provider value={{setIdReceta, datosReceta, setDatosReceta}}>
        {children}
    </recetaContext.Provider>
}

export default RecetaProvider;