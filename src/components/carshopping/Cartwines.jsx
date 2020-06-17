import React from 'react';
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
    const classes = useStyles();

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
                  > Añadir otra unidad
                  </Button>
              </TableCell>

              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
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