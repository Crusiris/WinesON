import { GET_WINES, WINES_CURRENT } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_WINES: //Obtener productos o vinos
            return {
                ...state, //Copia del state
                wines: action.payload
            }
        case WINES_CURRENT: //vino o producto seleccionado
            return {
                ...state, //Copia del state
                wineSelected: state.wines.filter(wine => wine.id === action.payload) //asignando el producto seleccionado al state         
            }
        default:
            return state;
    }
}