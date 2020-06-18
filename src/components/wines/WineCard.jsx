import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import WineContext from '../../context/wines/winesContext'
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
  const classes = useStyles();
  
  //Context
  const wineContext = useContext(WineContext);
  const { addWinesCart } = wineContext;

 //Destructuring del state
  const { urlImg, name , variant:{finalPrice, id} } = wine;

    

    //Funcion para seleccionar un producto (VINO)
    const selectedWines = (id, finalPrice, urlImg) =>{
      let quantity = 1
      addWinesCart(id, finalPrice, quantity, urlImg );
    }

 

    return (

      <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              image={urlImg}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {name}
              </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions  align="center">
          <Button size="small" color="primary">
            ${finalPrice}
          </Button>
          
          <Button variant="contained" color="secondary"
            className={classes.button}
            endIcon={<AddShoppingCartIcon />} 
            onClick= {()=> selectedWines(id, finalPrice, urlImg )}
            >
            Añadir
          </Button>
        </CardActions>
      </Card>
    );
}
 
export default WineCard;