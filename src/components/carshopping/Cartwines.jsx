import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import WineContext from '../../context/wines/winesContext';


//Estilos locales
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    media:{
      width:80,
      height: 80,

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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
         
            <TableRow>
              <TableCell component="th" scope="row">
              <img src={wine.urlImg} 
               className={classes.media}
               alt="imagen" />
              </TableCell>
              <TableCell align="right"> $ {wine.unitValue}</TableCell>
              
              <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    onClick={() => addOtherWine(1, wine.idVarianteProducto)}
                  > Añadir otra unidad
                  </Button>
              </TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => selectWine(wine.idVarianteProducto)}
                > Delete
              </Button>

              
              </TableCell>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default Cartwines;