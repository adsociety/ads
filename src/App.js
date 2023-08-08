import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import TeamPage from './pages/teamPage';
import EventsPage from './pages/eventsPage';
import EachEvent from './components/eachEvent';

function App() {

    return(
        
      <NextUIProvider>
          <Header/>
          <div className='container'>
            <Router>
              <Routes>

                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/events" element={<EventsPage/>} />
                <Route exact path="/team" element={<TeamPage/>} />
                <Route exact path="/events/eventlink" element={<EachEvent/>} />


              </Routes>
            </Router>
          </div>
          <Footer/>
        
      </NextUIProvider>
    )
  }

export default App;
