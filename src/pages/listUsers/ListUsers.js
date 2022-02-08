import React, {Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppState, {AppContext} from '../../context/appContext';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';
import UserDetail from '../userDetail/UserDetail';




const ListUsers = () => {

    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    const appContext = useContext(AppContext);

    const { users, getUsers } = userContext; 
    const {isAuthenticated} = authContext;
    const {appState, setAppState} = appContext;

    const {currentUser} = appState;

    const userNavigate = useNavigate();
    
    useEffect(() => {
     userContext.getUsers();
     authContext.loadUser();
     
     
    }, []);

    const showDetail = (user) => {
      setAppState({currentUser:user});
     
      userNavigate('/userDetail');
    }
    

    const UserList = () => users.map(user => (<Fragment><div className="divRow  mb-4" onClick={() => {showDetail(user)}}><h1>{user.name}</h1>
                                                {user.email} - 
                                                
                                                {user.isActive ? <span className="activeClass"> Active</span> :
                                                <span className="notActiveClass"> Not Active</span> }
                                                </div>
                                               
                                                </Fragment> ));





  return (
  
  <Fragment>
    

    <h1 className="topMargin mb-4">Users</h1>

    <UserList className="topMargin"/>



  </Fragment>

  )
};

export default ListUsers;




