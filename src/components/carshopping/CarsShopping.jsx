import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListCartWines from './ListCartWines';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,
}));


const CarsShopping = () => {
  const classes = useStyles();

  return (

    <Fragment>
      
      <div className={classes.toolbar}></div>
      <div className={classes.toolbar}></div>
          <ListCartWines/>
           
    </Fragment>
    
  );

}
 
export default CarsShopping;