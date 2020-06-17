import React, {useContext, Fragment} from 'react';
import WineContext from '../../context/wines/winesContext'; //Importando wineContext para acceder a states y funciones.
import WineCard from './WineCard';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';

const ListWines = () => {
    const classes =useStyles();
    const wineContext = useContext(WineContext);
    const { wines } = wineContext;

    return ( 
        <Fragment>
            <Grid container spacing={4} justify="center" className={classes.gridContainer} >
                
                {wines.map(wine =>(
                    <Grid item xs={12} sm={6} md={4} key={wine.id}>
                    <WineCard
                    
                    wine={wine}
                    />
                    </Grid>
                ))}
                
            </Grid>
       </Fragment>
     );
}
 
export default ListWines;