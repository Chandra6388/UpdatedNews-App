import './App.css';
import Business from './container/Business';
import Entertainment from './container/Entertainment';
import General from './container/General';
import Navbar from './container/Navbar';
import NewsItem from './container/NewsItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sports from './container/Sports';
import Technology from './container/Technology';

function App() {
  return (
     <>
     <BrowserRouter>
      <Navbar/>
      
        <Routes>
        <Route path='/' element={<NewsItem/>}></Route>
        <Route path='/general' element={<General/>}></Route>
        <Route path='/business' element={<Business/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/entertainment' element={<Entertainment/>}></Route>   
        </Routes>
      </BrowserRouter>
    
     </>
  ); 
}

export default App;
