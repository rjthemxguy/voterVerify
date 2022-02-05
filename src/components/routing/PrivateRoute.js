import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import {Route, Navigate, Outlet} from 'react-router-dom';



const PrivateRoute = () => {

  
  const authcontext = useContext(AuthContext);

  const {isAuthenticated, loading} = authcontext;

  

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
