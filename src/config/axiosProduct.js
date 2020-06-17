import axios from 'axios';

const clientAxiosProduct = axios.create({
    baseURL: 'http://ec2-54-183-147-121.us-west-1.compute.amazonaws.com:8383',
    headers: {
        access_token: '22636ca690d932cc523065f4b3dea68ed3184bdb'
    }
});

export default clientAxiosProduct;