import React from 'react';
import Formulario from './formulario';
import Listado from './listado';
import Logo from '../logo.jpg';

function Home () {
    return (<>
        <div style={{display:'flex', justifyContent:'center', marginTop:100}}><img src={Logo} style={{width:150, height:200}}></img></div>
            <Formulario />
            <Listado />
        </>
    )
}

export default Home;