import { GET_WINES, WINES_CURRENT, EDIT_QUANTITY, DELETE_WINE, RES_POST } from '../../types';

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
        case EDIT_QUANTITY: //Modificando la unidad del producto
            return {
                ...state,
                cartDetails: state.cartDetails.map((wine) =>
                    wine.idVarianteProducto === action.payload.id ? {...wine, quantity: wine.quantity + action.payload.cant } :
                    wine
                ),
            };

        case DELETE_WINE: //Eliminar producto
            return {
                ...state, //Copia del state
                cartDetails: state.cartDetails.filter(elemt => elemt.idVarianteProducto !== action.payload)

            }
        case RES_POST:
            return {
                ...state, //Copia del state
                finalticket: action.payload
            }
        default:
            return state;
    }
}