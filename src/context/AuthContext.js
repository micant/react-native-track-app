import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        /// make api request to sign up with email & password

        // if we sign up, modify our state and say that we're authenticated

        // plus error handling
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in

        // handle success up updating state

        // error handling
    };
} ;

const signout = (dispatch) => {
    return () => {
        // somehow sign out??
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
);