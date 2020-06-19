import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import WineContext from '../../context/wines/winesContext';



//Estilos locales
const useStyles = makeStyles({
    media:{
      width:60,
      height: 60,
    },
    containerimg:{
      width:60,
      height: 60,
    },
    containerlist:{
      display:'flex',
      border: '1px solid #9e9e9e',
      maxWidth:800,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    containerIconos:{
      justifyContent:'space-between',
      alignItems:'center',
      alignContent:'center',
      width:100,
    }
    
  });

const Cartwines = ({wine}) => {
    const classes = useStyles(); //Obteniendo estilos de la funcion

    //Context
    const wineContext = useContext(WineContext);
    const { editQuantity , deleteWine } = wineContext;

    //Funcion que modifica la cantidad del producto
    const addOtherWine = (cant, id) => {
      editQuantity(cant, id);
    };

    //Seleccionando el elemeto para eliminarlo
    const  selectWine = id =>{
      //Funcion eliminar
      deleteWine(id);
    }

  return (
    <div className={classes.containerlist}>

        <div className={classes.containerimg}>
           <img src={wine.urlImg}  className={classes.media} alt="imagen" />
        </div>

        <div className={classes.containerIconos} >
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span"  onClick={() => addOtherWine(1, wine.idVarianteProducto)}>
              <AddIcon />
            </IconButton>
          </label>

          <label htmlFor="icon-button-file">
            <IconButton color="secondary" aria-label="upload picture" component="span"   onClick={() => selectWine(wine.idVarianteProducto)}>
                <DeleteIcon />
            </IconButton>
          </label>
        </div>
        
       
    </div>
  );
}
 
export default Cartwines;