import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer
import clientAxiosProduct from '../../config/axiosProduct'; //importando instancia de axios
import clientAxiosMarket from '../../config/axiosMarket'; //importando instancia de axios
import { GET_WINES, WINES_CURRENT, EDIT_QUANTITY } from '../../types';

//Creando el provider
const WinesState = props => {
   
    //Declarando un state inicial 
    const initialState = { 
        wines: [],
        cartDetails:[]
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
   
    //Funcion que selecciona producto clickeado
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


    //Funcion que agrega el producto al carrito de compra
    const addCarPost = async ( cartDetails ) => {

      try {
         //Peticion al API
         const res = await clientAxiosMarket.post('/v1/cart.json', {cartDetails});
         console.log(res);
        
      } catch (error) {
        console.log(error.response);

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
            editQuantity

          }}
        >
            {props.children}
        </WineContext.Provider>
  
    )
}

export default WinesState;