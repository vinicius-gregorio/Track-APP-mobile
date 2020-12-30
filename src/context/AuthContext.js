import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return {...state, errorMessage: action.payload};
            break;
        case 'signup': 
            return {errorMessage: '', token: action.payload};
            break;
        default:
            return state;
            break;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        //TODO: make api request
        try {
            const response = await trackerApi.post('/signup', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token});
           // await AsyncStorage.getItem('token');
           navigate('TrackList');
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
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
    { token: null, errorMessage: '' }
);