import { GET_WINES } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_WINES:
            return {
                ...state, //Copia del state
                wines: action.payload
            }
        default:
            return state;
    }
}