import './App.css';
import { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';



function App() {

  

    return(
        
      <NextUIProvider>
          <Header/>
          <div className='container'>
            <Router>
              <Routes>

                <Route exact path="/" element={<HomePage/>} />

              </Routes>
            </Router>
          </div>
          <Footer/>
        
      </NextUIProvider>
    )
  }

export default App;
