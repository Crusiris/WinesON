import React from 'react';
import Navbar from '../layout/header/Navbar';
import useStyles from './style';
import ListWine from './ListWines'
//import Copyright from '../layout/footer/Copyright'


const Wines = () => {
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