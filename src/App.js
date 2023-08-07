import './App.css';
import { useState, useEffect } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
    }
  }
})



function App() {

  

    return(
        
      <NextUIProvider theme={theme}>
          <Header/>
          <div className='container'>
            <Router>
              <Routes>

                {/* <Route exact path="/" element={<Home/>} /> */}

              </Routes>
            </Router>
          </div>
          <Footer/>
        
      </NextUIProvider>
    )
  }

export default App;
