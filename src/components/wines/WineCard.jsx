import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//Estilos del componente
const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 330,
    },
  });
  
const WineCard = ({wine}) => {

 //Destructuring del state
  const { urlImg, name , variant:{finalPrice} } = wine;

    const classes = useStyles();

    return (

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions  align="center">
          <Button size="small" color="primary">
            ${finalPrice}
          </Button>
          
          <Button variant="contained" color="secondary"
            className={classes.button}
            endIcon={<AddShoppingCartIcon />} >
            Añadir
          </Button>
        </CardActions>
      </Card>
    );
}
 
export default WineCard;