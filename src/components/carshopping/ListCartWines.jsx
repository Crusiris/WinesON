import React, { Fragment } from 'react';
import Cartwines from './Cartwines';
import Grid from '@material-ui/core/Grid';
import useStyles from '../wines/style';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const ListCartWines = () => {
    const classes =useStyles();
    return (  

        <Fragment>
                <Grid container spacing={4} justify="center" className={classes.gridContainer} >
                    <Typography className={classes.toolbar} variant="h5" >Carrito de Compras</Typography>
                    <Cartwines/>
                    <div className={classes.toolbar}></div>
                    
                </Grid>

                <div className={classes.toolbar}></div>
                <Grid container justify="center" className={classes.gridContainer} >
                
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        > Enviar Pedido </Button>
                </Grid>
        </Fragment>
        
    );
}
 
export default ListCartWines;