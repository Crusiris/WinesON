import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer
import clientAxiosProduct from '../../config/axiosProduct'; //importando instancia de axios
import { GET_WINES } from '../../types';

//Creando el provider
const WinesState = props => {
   
    //Declarando un state inicial 
    const initialState = { 
        wines: [],
        wineSelected:null
        
        
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
    getWines();

    return(

        <WineContext.Provider
          value={{
            wines:state.wines,
            wineSelected:state.wineSelected,
            getWines

          }}
        >
            {props.children}
        </WineContext.Provider>
  
    )
}

export default WinesState;