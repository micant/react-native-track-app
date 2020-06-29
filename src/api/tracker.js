import axios from 'axios';
import { AsyncStorage } from 'react-native'; 

const instance = axios.create({
    // Test only URL
    baseURL: 'http://98e46960b619.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;