import React, {useContext } from 'react';
import Cartwines from './Cartwines';
import Grid from '@material-ui/core/Grid';
import useStyles from '../wines/style';
import WineContext from '../../context/wines/winesContext';


const ListCartWines = () => {
    const classes = useStyles();

    //CONTEXT
    const winesContext =useContext(WineContext);
    const { cartDetails } = winesContext;

    return (  
        <Grid container spacing={4} justify="center" className={classes.gridContainer} >
            {cartDetails.map(wine =>(
                <Grid item xs={12} sm={12} md={12} key={wine.idVarianteProducto}>
                    <Cartwines
                         wine={wine}
                    />
                </Grid>
            ))}
                    
         <div className={classes.toolbar}></div> 
        </Grid>
        
    );
}
 
export default ListCartWines;