import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer
import clientAxiosProduct from '../../config/axiosProduct'; //importando instancia de axios
import { GET_WINES, WINES_CURRENT } from '../../types';

//Creando el provider
const WinesState = props => {
   
    //Declarando un state inicial 
    const initialState = { 
        wines: [],
        wineSelected:null,
        carShopping:[],
        data:{
            "cartDetails": [
              {
                "quantity":null,
                "unitValue":null,
                "idVarianteProducto":null
              }
            ]
        }
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
   
    //Funcion que selecciona producto clickeado
    const wineCurrent = id => {
      dispatch({
          type:WINES_CURRENT,
          payload: id
      })
    }

    //Funcion que agrega el producto al carrito de compra
    const addCar = async () => {

      try {

        
      } catch (error) {
        console.log(error);
      }
    }

    return(

        <WineContext.Provider
          value={{
            wines:state.wines,
            wineSelected:state.wineSelected,
            getWines,
            wineCurrent,
            addCar

          }}
        >
            {props.children}
        </WineContext.Provider>
  
    )
}

export default WinesState;