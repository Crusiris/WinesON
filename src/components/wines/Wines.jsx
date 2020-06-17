import React, { useEffect, useContext } from 'react';
import Navbar from '../layout/header/Navbar';
import useStyles from './style';
import ListWine from './ListWines';
import WineContext from '../../context/wines/winesContext'

//import Copyright from '../layout/footer/Copyright'


const Wines = () => {
const wineContext= useContext(WineContext);
const { getWines } = wineContext;

useEffect(()=>{
    getWines();
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    const classes = useStyles();
    return ( 
        
        <div className={classes.root}>
            <Navbar/>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <ListWine/>
            </div>
            
          
        </div>
        
     );
}
 
export default Wines;