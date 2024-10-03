import logo from './logo.svg';
import { useState } from 'react';
import {BrowserRouter, Link, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import EPK from './pages/EPK';
import Mentorship from './pages/Mentorship';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Videos from './pages/Videos';
import Footer from './components/Footer';

import './output.css';
import Navbar from './components/Navbar';
import MenuButton from './components/MenuButton';
import Viewport from './helpers/Viewport';

function App() {

  return (
    <div className="App bg-black font-league">
      {Viewport().width > 640 ?
      <div>
        <Navbar/> 
      </div> 
      :
      <div className='flex flex-row gap-2 align-bottom justify-end'>
        <MenuButton/>
      </div>
      }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/epk' element={<EPK />}/>
          <Route path='/mentorship' element={<Mentorship />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/tour' element={<Tour />}/>
          <Route path='/videos' element={<Videos />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
