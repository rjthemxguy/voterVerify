import React, {useReducer, useContext} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        USER_LOADED,
        AUTH_ERROR,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        LOGOUT,
        CLEAR_ERRORS} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isLoading: true,
        error: null,
        user: null

    }

    const [state, dispatch] = useReducer(authReducer, initialState);


// Actions go here


    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            isLoading: state.isLoading,
            error: state.error,
            user: state.user

        }}
        >

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;