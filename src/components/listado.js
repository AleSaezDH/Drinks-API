import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {tragosContext} from '../context/tragosContext';
import {recetaContext} from '../context/recetasContext';
import ModalDetalle from './modal';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

    const useStyles = makeStyles({
        root: {
            width: 300,
            marginTop: 40
        },
        media: {
            height: 300
        },
    });

    function Listado () {

        const {dato} = useContext(tragosContext);
        const {setIdReceta} = useContext(recetaContext);
        const [modal, setModal] = useState(false);
        const classes = useStyles();

        if (dato.length === 0) return false;

        return <>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', alignItems:'center', margin:'20px 30px 60px 30px'}}>
        {dato.map(x => {
        return <> <a onClick={() => {setIdReceta(x.idDrink); setModal(true)}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} height='300' image={x.strDrinkThumb} title={x.strDrink}/>
                    <CardContent><Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center', fontSize:21}}> {x.strDrink} </Typography></CardContent>
                </CardActionArea>
            </Card>
            </a>
        </>
        })}
        </div>
        {modal ? <ModalDetalle setModal={setModal}/> : null}
        </>
    }

export default Listado;

// cuando clickeo en ver detalle pongo al hook modal en true. Como pasa a ser true, se monta el componente ModalDetalle. Este componente se renderiza automáticamente porque el valor del hook open es true desde el inicio. Cuando cierro el modal necesito reiniciar el ciclo, porque sino mi hook modal siempre vale true entonces al no haber un cambio en su valor react entiende como si estuviera montado todo el tiempo, porque de hecho el componente lo está solamente que no se está mostrando su contenido. Por eso la necesidad de reiniciar el ciclo y para ello tengo que mandarle setModal para modificar el valor de este hook una vez haya cerrado el modal
