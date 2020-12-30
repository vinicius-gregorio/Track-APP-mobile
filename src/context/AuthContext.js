import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        
    
        default:
            return state;
            break;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        //TODO: make api request
        try {
            const response = await trackerApi.post('/signup', { email, password});
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //TODO: make api request
    }
};
const signout = (dispatch) => {
    return ({  }) => {
        //TODO: signout
    }
};
export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signup, signout },
    { isSignedIn: false }
);