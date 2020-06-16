import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer
import clientAxiosProduct from '../../config/axiosProduct'; 

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
      //Obtener Vinos
    const getWines = async () =>{
    
        try {
            //Peticion a la base de batos
            const res = await clientAxiosProduct.get('/v2/markets/:market_id/collection/:collection_id/market_info.json');
            await console.log(res);
            
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