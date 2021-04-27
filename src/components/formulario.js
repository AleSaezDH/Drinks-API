import React, { useContext, useState } from 'react';
import {categoriasContext} from '../context/categoriasContext';
import {tragosContext} from '../context/tragosContext';
import Alerta from './alerta';
import {TextField, Select, MenuItem, InputLabel, FormControl, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    FormControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));

function Formulario () {

    const {categorias} = useContext(categoriasContext);
    const {setBusqueda} = useContext(tragosContext);
    const [alerta, setAlerta] = useState(false);
    const [datos, setDatos] = useState({ingrediente:'', cat: ''});
    const {ingrediente, cat} = datos;

    function validarForm (e) {
        e.preventDefault();

        if ((ingrediente || cat).trim() === '') {
            return setAlerta(true);
        }
        setBusqueda(datos);
    }

    function guardarValores (e) {
        setDatos({
            ...datos, [e.target.name] : e.target.value
        });
    }

      const classes = useStyles();

    return (<>
        <form onSubmit={validarForm} style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:30}}>
            <TextField label="Ingrediente" variant="outlined" name='ingrediente' onChange={guardarValores} value={ingrediente} style={{backgroundColor:'white'}}/>
            <FormControl className={classes.FormControl} variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="Categoria" name='cat' value={cat} onChange={guardarValores} style={{backgroundColor:'white'}}>
                    {categorias.map((categoria, index) => {
                        return <MenuItem value={categoria.strCategory} key={index}>{categoria.strCategory}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button type='submit' variant="contained" style={{backgroundColor:'#2167d9', color:'white', fontWeight:'bold'}}> Buscar </Button>
        </form>
        {alerta ? <Alerta setAlerta={setAlerta}/> : null}
        </>
    )
}

export default Formulario;
