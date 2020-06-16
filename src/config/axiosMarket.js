import axios from 'axios';

const clientAxiosMarket = axios.create({
    baseURL: process.env.REACT_APP_URL_MARKET
});

export default clientAxiosMarket;