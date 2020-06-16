import React from 'react';
import Navbar from '../layout/header/Navbar';
import useStyles from './style';


const Wines = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            
            <Navbar/>
          
        </div>
        
     );
}
 
export default Wines;