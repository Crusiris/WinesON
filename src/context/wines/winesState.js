import React, { useReducer } from 'react';
import WineContext from './winesContext'; //importando context
import winesReducer from './winesReducer'; //importando reducer

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


      return(

        <WineContext.Provider
          value={{
            wines:state.wines,
            wineSelected:state.wineSelected

          }}
        >
            {props.children}
        </WineContext.Provider>
  
    )
}

export default WinesState;