import axios from 'axios';

const clientAxiosProduct = axios.create({
    baseURL: process.env.REACT_APP_URL_PRODUCT,
    headers: {
        access_token: '22636ca690d932cc523065f4b3dea68ed3184bdb'
    },
    params: {
        market_id: '1',
        collection_id: '2',
    }
});

export default clientAxiosProduct;