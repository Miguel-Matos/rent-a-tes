import React from 'react';
import top from '../img/topBanner.webp';
import { useLocation } from 'react-router-dom';

// Define an interface with the page names
interface Pages {
  home: string;
  about: string;
  models: string;
  testimonials: string;
  contact: string;
};

export default function TopBanner() {

  const location = useLocation();
  const currentPage = location.pathname.substring(1); // Remove the leading '/' from pathname

  // Use the interface to type the 'pages' object
  const pages: Pages = {
    home: 'Home',
    about: 'About',
    models: 'Models',
    testimonials: 'Testimonials',
    contact: 'Contact',
  };

  const currentPageName = pages[currentPage as keyof Pages];

  return(
    <div className='h-[315px]'>
      <div className='absolute top-0 left-0 h-[400px] 2xl:h-[500px] pointer-events-none overflow-hidden'>
        <div className=' bg-white w-screen min-h-[400px] 2xl:h-[500px] opacity-50 absolute'></div>
        <img className='min-h-[400px] -z-20 object-cover 2xl:-mt-16 w-screen' src={top} alt="top banner" />
      </div>
      <div className='flex md:justify-center'>
        <h1 className='text-5xl z-10 font-bold p-5 w-3/4'>{currentPageName}</h1>
      </div>
    </div>
  );
};