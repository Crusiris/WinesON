import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

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
        <CardActions>
          <Button size="small" color="primary">
            {finalPrice}
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
}
 
export default WineCard;