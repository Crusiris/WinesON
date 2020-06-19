import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListCartWines from './ListCartWines';
import { Typography } from '@material-ui/core';
import WineContext from '../../context/wines/winesContext';
import Button from '@material-ui/core/Button';
//modal
import ModalComponent from '../layout/modal/modal'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,

  content: {
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    marginTop:'0.5em'
  },

  item:{
    width:'100%',
    display:'flex', 
    justifyContent:'center',
    marginBottom:'0.5em'

  },
  button: {
    margin: theme.spacing(1),
    width:'20%',
    
  },
}));


const CarsShopping = () => {
  const classes = useStyles();

  //CONTEXT
  const winesContext =useContext(WineContext);
  const { cartDetails, addCarPost } = winesContext;
  
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

  //Funcion para enviar la orden
  const sendOrder = cartDetails => {
    addCarPost(cartDetails);
    
    setTimeout(() => {
      handleOpen();
    }, 2000);
    
  }

  return (

    <Fragment>
       <div className={classes.toolbar}></div>
       
       
        <section className={classes.content}>
            {cartDetails.length !== 0 
            
            ? 
              (<div className={classes.item} justify="center">
                <Typography className={classes.item} variant="h5" >Carrito de Compras</Typography>
              </div>)
            :

              (<div className={classes.item} justify="center">
                <Typography className={classes.item} variant="h6" >No hay productos seleccionados</Typography>
              </div>)
            }


              <ListCartWines justify="center"/>
           

          {cartDetails.length !== 0
          ?(
            <div className={classes.item} justify="center">
              <Button 
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  open={abrir}
                  onClose={handleClose}
                  onClick={()=> sendOrder(cartDetails)}
              > Enviar Pedido </Button>
            </div>
          )
          :null}
         
         {abrir ? <ModalComponent open={abrir} onClose={handleClose} /> :null}
        </section>
         
           
    </Fragment>
    
  );

}
 
export default CarsShopping;