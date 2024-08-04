import logo from './logo.svg';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import EPK from './pages/EPK';
import Mentorship from './pages/Mentorship';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Videos from './pages/Videos';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
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
    </div>
  );
}

export default App;
