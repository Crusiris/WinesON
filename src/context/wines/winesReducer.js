import { GET_WINES, WINES_CURRENT, EDIT_QUANTITY, DELETE_WINE } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_WINES: //Obtener productos o vinos
            return {
                ...state, //Copia del state
                wines: action.payload
            }
        case WINES_CURRENT: //vino o producto seleccionado
            //[...state.cartDetails, action.payload]
            return {
                ...state, //Copia del state
                cartDetails: [].concat(
                    action.payload,
                    state.cartDetails.filter(
                        (wine) =>
                        wine.idVarianteProducto !== action.payload.idVarianteProducto
                    )
                ),
            };
        case EDIT_QUANTITY: //Obtener productos o vinos
            return {
                ...state,
                cartDetails: state.cartDetails.map((wine) =>
                    wine.idVarianteProducto === action.payload.id ? // transform the one with a matching id
                    {...wine, quantity: wine.quantity + action.payload.cant } : // otherwise return original todo
                    wine
                ),
            };

        case DELETE_WINE: //Obtener productos o vinos
            console.log(action.payload);
            return {
                ...state, //Copia del state
                cartDetails: state.cartDetails.filter(elemt => elemt.idVarianteProducto !== action.payload)

            }

        default:
            return state;
    }
}