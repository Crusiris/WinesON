import React, {Fragment} from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles =  makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    toolbar: theme.mixins.toolbar,
  }));

const SuccessfulDelivery = () => {
    const classes = useStyles();

    return ( 
      <Fragment>
        <div className={classes.toolbar}></div>
        <Container>
          
            <Card className={classes.root}>
                <CardContent style={{ backgroundColor: '#cfe8fc'}}>
                    
                    <Typography variant="h5" component="h2">
                    Pedido Exitoso
                    </Typography>
                
                    <br />
                    {'"Haz Otro Pedido"'}
                
                </CardContent>
                <CardActions>
                   <Link to={'/'} className={classes.deconone}>
                      <Button  size="small">Inicio</Button>
                    </Link>
                </CardActions>
            </Card>
        
                
        </Container>
        </Fragment>
     );
}
 
export default SuccessfulDelivery;
