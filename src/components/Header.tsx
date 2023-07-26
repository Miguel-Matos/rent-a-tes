import { useState } from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [burger, setBurger] = useState(false);
  const [colorVal, setColor] = useState('black');

  function burgerDisplay() {
    setBurger(!burger);
  }

  return (
    <div>
      <nav className='md:flex justify-between my-14 text-lg font-bold hidden'>
        <img className='w-10 md:w-16' src={logo} alt='Logo' />
        <a className='hover:text-red-800' href='#'>Home</a>
        <a className='hover:text-red-800' href="#">About</a>
        <a className='hover:text-red-800' href="#">Models</a>
        <a className='hover:text-red-800' href="#">Testimonials</a>
        <a className='hover:text-red-800' href="#">Contact</a>
      </nav>

      <nav className='flex justify-between my-14 text-lg font-bold md:hidden'>
        <img className='w-10 md:w-16' src={logo} alt='Logo' />
        <div hidden={burger}>
          <FontAwesomeIcon icon={faBars} size='2xl' onClick={burgerDisplay} style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} />
        </div>
        {burger ? (
          <div>
            <button className='absolute right-10 z-20' onClick={burgerDisplay}><FontAwesomeIcon icon={faXmark} style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} /></button>
            <div className='flex flex-col absolute left-0 top-1/4 text-center bg-white gap-5 w-full h-full'>
              <a className='hover:text-red-800' href='#'>Home</a>
              <a className='hover:text-red-800' href="#">About</a>
              <a className='hover:text-red-800' href="#">Models</a>
              <a className='hover:text-red-800' href="#">Testimonials</a>
              <a className='hover:text-red-800' href="#">Contact</a>
            </div>    
          </div>

        ) : null}
      </nav>
    </div>
  );
}
