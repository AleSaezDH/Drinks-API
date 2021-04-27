import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Backdrop, Fade, Typography} from '@material-ui/core';
import {recetaContext} from '../context/recetasContext';

    const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    }));

    export default function ModalDetalle ({setModal}) {

    const {setIdReceta, datosReceta, setDatosReceta} = useContext(recetaContext);
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const detalles = () => {
        if (Object.keys(datosReceta).length !== 0) {
            console.log(datosReceta.drinks[0]);
        }
    }

    return (
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => {handleClose(); setDatosReceta({}); setIdReceta(null); setModal(false);}}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}} className={classes.paper}>
                <Typography style={{marginBottom:15, textAlign:'center'}} variant="h3" id="transition-modal-title">{datosReceta.strDrink}</Typography>
                <img style={{width:350, height:350}} src={datosReceta.strDrinkThumb}></img>
                <Typography style={{marginTop:10}} variant="h5" id="transition-modal-description">{datosReceta.strGlass}</Typography>
                <Typography style={{textAlign:'center'}} variant="subtitle1" id="transition-modal-description">Intructions: {datosReceta.strInstructions}</Typography>
            </div>
            </Fade>
        </Modal>
        </div>
    );
    }