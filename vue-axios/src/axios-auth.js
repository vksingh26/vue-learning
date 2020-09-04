import axios from 'axios';
import { URL } from './constant';
const instance = axios.create({
    baseURL: URL.url
})

instance.defaults.headers['NAME'] = 'VIKASH';

export default instance;