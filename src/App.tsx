import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Error from './components/Error';



function App() {
  return (
    <div className='md:w-3/4 px-5 flex flex-col mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/models' element={<Models />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
