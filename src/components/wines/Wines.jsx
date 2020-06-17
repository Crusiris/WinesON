import React, { useEffect, useContext } from 'react';
import useStyles from './style';
import ListWine from './ListWines';
import WineContext from '../../context/wines/winesContext'

//import Copyright from '../layout/footer/Copyright'


const Wines = () => {
const wineContext= useContext(WineContext);//Importando context
const { getWines } = wineContext;///Destructuring del context para obtener states y funciones del context


//Cargando la data al iniciar la app
useEffect(()=>{
    getWines();
     // eslint-disable-next-line react-hooks/exhaustive-deps 
},[])
    
    const classes = useStyles();
    return ( 
        
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <ListWine/>
            </div>
        
     );
}
 
export default Wines;