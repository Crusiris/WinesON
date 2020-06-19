import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer
import clientAxiosProduct from '../../config/axiosProduct'; //importando instancia de axios
import clientAxiosMarket from '../../config/axiosMarket'; //importando instancia de axios
import { GET_WINES, WINES_CURRENT, EDIT_QUANTITY, DELETE_WINE, RES_POST} from '../../types';

//Creando el provider
const WinesState = props => {
   
    //Declarando un state inicial 
    const initialState = { 
        wines: [],
        cartDetails:[],
        finalticket:[]
    }

    //Definiendo useReducer
     const [ state, dispatch ] = useReducer(winesReducer, initialState); 

    /////////FUNCIONES///////////
   
    
    //Funcion Obtener vinos
    const getWines = async () =>{
    
        try {
            //Peticion al API
            const res = await clientAxiosProduct.get('/v2/markets/1/collection/2/market_info.json')
            //console.log(res.data.data);

            dispatch({
              type: GET_WINES,
              payload:res.data.data
          })
            
        } catch (error) {
            console.log(error.response);
        }
          
    }

    //Funcion que edita la cantidad del producto
      const editQuantity = (cant, id) => {
        dispatch({
          type: EDIT_QUANTITY,
          payload: {
            cant,
            id,
          },
        });
      };
   
    //Funcion que agrega el producto al carrito
    const addWinesCart = (id, finalPrice, quantity, urlImg) => {
      dispatch({
          type:WINES_CURRENT,
          payload:{
            quantity,
            urlImg,
            unitValue:finalPrice,
            idVarianteProducto:id,
        }
      })
    }

    //Funcion que elimina el elemento del state
    const deleteWine = id => {
      dispatch({
        type:DELETE_WINE,
        payload:id
    })
    }

    //Funcion que agrega la compra a la BD
    const addCarPost = async ( cartDetails ) => {
      try {
         //Peticion al API
         const res = await clientAxiosMarket.post('/v1/cart.json', {cartDetails});
         dispatch({
          type: RES_POST,
          payload:res.data.data
      })
        
      } catch (error) {
        console.log(error);

      }
    }
    

    return(

        <WineContext.Provider
          value={{
            wines:state.wines,
            cartDetails:state.cartDetails,
            getWines,
            addWinesCart,
            addCarPost,
            editQuantity,
            deleteWine

          }}
        >
            {props.children}
        </WineContext.Provider>
  
    )
}

export default WinesState;