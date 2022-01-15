import logo from './logo.svg';
import './App.css';
import Search from './pages/search/search';
import Navbar from './pages/navbar/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/about/about';
import VoterState from './context/voter/VoterState';
import VoterList from './pages/voterList/voterList';



function App() {
  return (
    <div className="App">
      
      

      <div>
      <VoterState>  
        <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/results" element={<VoterList />}></Route>
          </Routes>
        </BrowserRouter>
        </VoterState>
      </div>
        
      
    </div>
  );
}

export default App;
