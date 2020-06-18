import React, { Fragment, useContext } from 'react';
import Cartwines from './Cartwines';
import Grid from '@material-ui/core/Grid';
import useStyles from '../wines/style';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import WineContext from '../../context/wines/winesContext';
//modal
import ModalComponent from '../layout/modal/modal'



const ListCartWines = () => {
    const classes =useStyles();
    //State y funcione para mostrar y ocultar modal
    const [abrir, setOpen] = React.useState(false);

        //Funcion para abrir el modal
        const handleOpen = () => {
            setOpen(true);
        };
        //Funcion para cerrar el modal
        const handleClose = () => {
            setOpen(false);
        };
        
        
        
   
        //CONTEXT
    const winesContext =useContext(WineContext);
    const { cartDetails, addCarPost } = winesContext;

    //Funcion para enviar la orden
    const sendOrder = cartDetails => {
        handleOpen();
        addCarPost(cartDetails);  
    }

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
                                open={abrir}
                                onClose={handleClose}
                                onClick={()=> sendOrder(cartDetails)}
                                
                                > Enviar Pedido </Button>
                        {abrir ? <ModalComponent open={abrir} onClose={handleClose} /> :null}
                       
                    </Grid>
                   
                    
                        {/* <Grid container spacing={4} justify="center" className={classes.gridContainer} >
                            <Typography className={classes.toolbar} variant="h5" >No hay productos seleccionados</Typography>
                            </Grid> */}
                  
        </Fragment>
        
    );
}
 
export default ListCartWines;