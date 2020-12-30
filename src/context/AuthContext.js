import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return {...state, errorMessage: action.payload};
            break;
    
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
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
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
    { isSignedIn: false, errorMessage: '' }
);