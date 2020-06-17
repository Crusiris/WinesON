import axios from 'axios';

const clientAxiosMarket = axios.create({
    baseURL: process.env.REACT_APP_URL_MARKET,
    headers: {
        access_token: process.env.REACT_APP_TOKEN
    }
});

export default clientAxiosMarket;