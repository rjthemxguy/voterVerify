import React, {Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppState, {AppContext} from '../../context/appContext';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';
import UserDetail from '../userDetail/UserDetail';




const CountyList = () => {

    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const appContext = useContext(AppContext);

    const { users, getUsers} = userContext; 
    const {isAuthenticated, user} = authContext;
    const {appState, setAppState} = appContext;

    const {currentUser} = appState;

    const userNavigate = useNavigate();
    
    useEffect(() => {
     
     authContext.loadUser();
     
     
    }, []);

   
    

  return (
  
  <Fragment>
    

   <h2 className="topMargin">Select County</h2>
   {user.name}


  </Fragment>

  )
};

export default CountyList;