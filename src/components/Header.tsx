import { useState } from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <Link className='hover:text-red-800' to='/'>Home</Link>
        <Link className='hover:text-red-800' to="/about">About</Link>
        <Link className='hover:text-red-800' to="/models">Models</Link>
        <Link className='hover:text-red-800' to="/testimonials">Testimonials</Link>
        <Link className='hover:text-red-800' to="/contact">Contact</Link>
      </nav>

      <nav className='flex justify-between my-14 text-lg font-bold md:hidden'>
        <img className='w-10 md:w-16' src={logo} alt='Logo' />
        <div hidden={burger}>
          <FontAwesomeIcon icon={faBars} size='2xl' onClick={burgerDisplay} style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} />
        </div>
        {burger ? (
          <div>
            <button className='absolute right-10 z-20' onClick={burgerDisplay}><FontAwesomeIcon icon={faXmark} size='xl' style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} /></button>
            <div className='flex flex-col absolute left-0 pt-48 text-center bg-white gap-5 w-full h-screen'>
              <Link onClick={burgerDisplay} className='hover:text-red-800' to='/'>Home</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-800' to="/about">About</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-800' to="/models">Models</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-800' to="/testimonials">Testimonials</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-800' to="/contact">Contact</Link>
            </div>    
          </div>

        ) : null}
      </nav>
    </div>
  );
}
