import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom'; // Update the import to useLocation
import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Error from './components/Error';
import TopBanner from './components/TopBanner';

import { useState, useEffect } from 'react';
import BottomBanner from './components/BottomBanner';

function App() {
  const [homePage, setHome] = useState(false);

  // Access the location object using useLocation hook
  const location = useLocation();

  // Listen for route changes and update homePage state
  useEffect(() => {
    // If the location.pathname is NOT '/' (home), set homePage to true, otherwise false
    setHome(location.pathname !== '/');
  }, [location]);

  return (
    <div>
      <div >
        <div className='md:w-3/4 px-5 flex flex-col mx-auto'>
          <Header />
        </div>
        
        {homePage ? <TopBanner name='Contact' /> : null}

        <div className='md:w-3/4 px-5 flex flex-col mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/models' element={<Models />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>

        

        {homePage ? <BottomBanner /> : null}
        <div className='md:w-3/4 px-5 flex flex-col mx-auto'>
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default App;
