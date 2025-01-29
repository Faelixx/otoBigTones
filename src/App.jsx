import React from 'react';

import {HashRouter, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import EPK from './pages/EPK';
// import Mentorship from './pages/Mentorship';
// import Contact from './pages/Contact';
// import Music from './pages/Music';
// import Tour from './pages/Tour';
// import Videos from './pages/Videos';
import Footer from './components/Footer';

import './output.css';
import Navbar from './components/Navbar';
import MenuButton from './components/MenuButton';
import Viewport from './helpers/Viewport';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyEPK = React.lazy(() => import('./pages/EPK'));
const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyMentorship = React.lazy(() => import('./pages/Mentorship'));
const LazyMusic = React.lazy(() => import('./pages/Music'));
const LazyTour = React.lazy(() => import('./pages/Tour'));
const LazyVideos = React.lazy(() => import('./pages/Videos'));

function App() {

  return (
    <div className="App font-league bg-black">
      <HashRouter>
      {Viewport().width > 640 ?
        <Navbar/> 
      :
        <MenuButton/>
      }
        <Routes>
          <Route path='/' element={
            <React.Suspense fallback='loading...'>
              <LazyHome />
            </React.Suspense>
          }/>
          <Route path='/contact' element={
            <React.Suspense fallback='loading...'>
            <LazyContact />
            </React.Suspense>
          }/>            
          <Route path='/epk' element={
            <React.Suspense fallback='loading...'>
            <LazyEPK />
            </React.Suspense>
          }/>
          <Route path='/mentorship' element={
            <React.Suspense fallback='loading...'>
            <LazyMentorship />
            </React.Suspense>
        }/>
          <Route path='/music' element={
            <React.Suspense fallback='loading...'>
            <LazyMusic />
            </React.Suspense>
        }/>
          <Route path='/tour' element={
            <React.Suspense fallback='loading...'>
            <LazyTour />
            </React.Suspense>
        }/>
          <Route path='/videos' element={
            <React.Suspense fallback='loading...'>
            <LazyVideos />
            </React.Suspense>
        }/>
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
