import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='md:w-3/4 px-5 flex flex-col mx-auto'>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
