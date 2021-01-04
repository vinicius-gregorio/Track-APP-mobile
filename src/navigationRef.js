import { NavigationActions } from 'react-navigation';


let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
};