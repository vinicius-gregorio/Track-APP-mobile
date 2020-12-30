import createDataContext from './createDataContext';


const authReducer = (state, action) => {
    switch (action.type) {
        
    
        default:
            return state;
            break;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        //TODO: make api request
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