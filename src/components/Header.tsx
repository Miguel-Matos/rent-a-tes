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
    <div className='z-50'>
      <nav className='md:flex justify-between content-center my-14 text-lg font-bold hidden'>     
        <Link id='home' className='hover:text-red-600' to='/'><img className='w-10 md:w-16' src={logo} alt='Logo' /></Link>
        <Link id='home' className='hover:text-red-600' to='/'>Home</Link>
        <Link id='about' className='hover:text-red-600' to="/about">About</Link>
        <Link id='models' className='hover:text-red-600' to="/models">Models</Link>
        <Link id='testimonials' className='hover:text-red-600' to="/testimonials">Testimonials</Link>
        <Link id='contact' className='hover:text-red-600' to="/contact">Contact</Link>
      </nav>

      <nav className='flex justify-between my-14 text-lg font-bold md:hidden'>
        <Link id='home' className='hover:text-red-600' to='/'><img className='w-10 md:w-16' src={logo} alt='Logo' /></Link>
        <div hidden={burger}>
          <FontAwesomeIcon icon={faBars} size='2xl' onClick={burgerDisplay} style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} />
        </div>
        {burger ? (
          <div>
            <button className='absolute right-10 z-20' onClick={burgerDisplay}><FontAwesomeIcon icon={faXmark} size='xl' style={{color: colorVal}} onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('black')} /></button>
            <div className='flex flex-col absolute top-0 left-0 text-center bg-white gap-10 text-2xl w-full h-screen'>
              <Link onClick={burgerDisplay} className='hover:text-red-600 pt-40' to='/'>Home</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-600' to="/about">About</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-600' to="/models">Models</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-600' to="/testimonials">Testimonials</Link>
              <Link onClick={burgerDisplay} className='hover:text-red-600' to="/contact">Contact</Link>
            </div>    
          </div>

        ) : null}
      </nav>
    </div>
  );
}
