import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { ActivityIndicatorComponent } from 'react-native';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};


const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data })
    console.log(response)
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
};


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);