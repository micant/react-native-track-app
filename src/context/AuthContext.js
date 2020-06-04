import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { token: action.payload, errorMessage: '' }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');   
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Signup')
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        console.log(email, password)
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ 
            type: 'signin', 
            payload: response.data.token 
        });
        navigate('TrackList');
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: `Something went wrong with sign up:\n${err.message}` 
        });
    }
};


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ 
            type: 'signin',
            payload: response.data.token
        });
        navigate('TrackList');
    } catch (err) {
        dispatch({ 
            type: "add_error", 
            payload: `Something went wrong with sign in:\n${err.message}`  
        });
    }
};


const signout = (dispatch) => () => {
    // somehow sign out??
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);