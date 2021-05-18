import { createStore } from 'redux'
import authReducer from './authReducer'
import SecureLS from 'secure-ls'

const secureLs = new SecureLS();

const loggedInState = {
    isLoggedIn: true,
    username: 'user1',
    displayName: 'display1',
    image: null,
    password: 'P4ssword'

}

const getStateFromStorage = () => {
    const hoaxAuth = secureLs.get('hoax-auth');

    let stateInLocalStorage = {
        isLoggedIn: false,
        username: undefined,
        displayName: undefined,
        image: null,
        password: undefined
    }
    if (hoaxAuth) {
        return hoaxAuth;
    }

    return stateInLocalStorage;
}

const updateStateInStorage = newState => {
    secureLs.set('hoax-auth', newState);
}


const configureStore = () => {

    const store = createStore(authReducer, getStateFromStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(() => {
        updateStateInStorage(store.getState());
    })

    return store;
}

export default configureStore;