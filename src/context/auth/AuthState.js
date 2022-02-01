import React, {useReducer, useContext} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

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
        user: null,
        isActive:false,
        countySB: false,
        countyRIV: false

    }

    const [state, dispatch] = useReducer(authReducer, initialState);



// Actions go here


// LOAD USER

const loadUser = async () => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

 try {
     const res = await axios.get('http://139.59.170.27:5000/api/auth');

    
     dispatch({
         type: USER_LOADED,
         payload:res.data
     })

 } catch (err) {

    console.log("ERR: " + err.msg);
    dispatch({type: AUTH_ERROR});
     
 }  
  

};



// REGISTER USER

const register = async formData => {
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
try {

    const res = await axios.post('http://139.59.170.27:5000/api/users', formData, config);

    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    })

    loadUser();
    
} catch (err) {
    dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
    })
}

}

const clearErrors = () => {dispatch({type:CLEAR_ERRORS})}



    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            isLoading: state.isLoading,
            error: state.error,
            user: state.user,
            isActive: state.isActive,
            countySB: state.countySB,
            countyRIV: state.countyRIV,
            register,
            clearErrors,
            loadUser

        }}
        >

            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;