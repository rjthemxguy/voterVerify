
import './App.css';
import Search from './pages/search/search';
import Navbar from './pages/navbar/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/about/about';
import VoterState from './context/voter/VoterState';
import VoterList from './pages/voterList/voterList';
import CountyList from './pages/countyList/CountyList';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import SearchState from './context/search/searchContext';
import { SearchContext } from './context/search/searchContext';
import AppState from './context/appContext';
import AuthState from './context/auth/AuthState';
import { useState } from 'react';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from '../src/components/routing/PrivateRoute';
import ListUsers from './pages/listUsers/ListUsers';
import UserState from './context/user/UserState';
import UserDetail from './pages/userDetail/UserDetail';
import NotActive from '../src/pages/notActtive/notActive';

if(localStorage.token) {
  setAuthToken(localStorage.token);
  
}


function App() {
  
  return (
    <div className="App">
      
      

      <div>
       <AuthState> 
      <AppState>
        <UserState>
      <VoterState>
       
         <SearchState>
        <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path='/' element={<PrivateRoute/>}>            
              <Route path="/" element={<Search />}/>
             </Route>

            <Route path="/about" element={<About />}></Route>

            <Route path="/notActive" element={<NotActive />}></Route>

            <Route path='/' element={<PrivateRoute/>}>    
              <Route path="/users" element={<ListUsers />}></Route>
            </Route>
            
            <Route path="/userDetail" element={<UserDetail />}></Route>

            <Route path="/countyList" element={<CountyList />}></Route>
            <Route path='/results' element={<PrivateRoute/>}>  
              <Route path="/results" element={<VoterList/>}/>
            </Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
       </SearchState>
       
        </VoterState>
        </UserState>
        </AppState>
        </AuthState>
      </div>
        
      
    </div>
  );
}

export default App;
