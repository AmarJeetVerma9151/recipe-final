import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.bundle.min"
import axios from 'axios';
import Single from './Pages/Single';
import Pagenotfound from './Pages/Pagenotfound ';
import Wishitem from './Pages/Wishitem';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
   


   <BrowserRouter>

   <Navbar/>
  <Routes>
  <Route path="/"  element={<Home/>}/>
  <Route path="/single"  element={<Single/>}/>
  <Route path="/*"  element={<Pagenotfound/>}/>
  <Route path="/Wishitem"  element={<Wishitem/>}/>

  </Routes>
   
   
   </BrowserRouter>
    </div>
  );
}

export default App;
