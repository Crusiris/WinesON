import axios from 'axios';

const clientAxiosProduct = axios.create({
    baseURL: process.env.REACT_APP_URL_PRODUCT,
    headers: {
        access_token: process.env.REACT_APP_TOKEN
    }
});

export default clientAxiosProduct;