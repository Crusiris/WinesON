import React, { Fragment, useContext } from 'react';
import Cartwines from './Cartwines';
import Grid from '@material-ui/core/Grid';
import useStyles from '../wines/style';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import WineContext from '../../context/wines/winesContext';



const ListCartWines = () => {
    const classes =useStyles();

    const winesContext =useContext(WineContext);
    const { cartDetails, addCarPost } = winesContext;

    return (  

        <Fragment>
                <Grid container spacing={4} justify="center" className={classes.gridContainer} >
                    <Typography className={classes.toolbar} variant="h5" >Carrito de Compras</Typography>

                    {cartDetails.map(wine =>(
                        <Grid item xs={12} sm={12} md={12} key={wine.id}>
                            <Cartwines
                            wine={wine}
                            />
                        </Grid>
                   ))}
                    
                    <div className={classes.toolbar}></div>
                    
                </Grid>

                <div className={classes.toolbar}></div>
                <Grid container justify="center" className={classes.gridContainer} >
                
                    <Button 
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={()=> addCarPost(cartDetails)}
                        > Enviar Pedido </Button>
                </Grid>
        </Fragment>
        
    );
}
 
export default ListCartWines;