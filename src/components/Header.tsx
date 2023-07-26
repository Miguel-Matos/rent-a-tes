import { useState } from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [burger, setBurger] = useState(false);

  function burgerDisplay() {
    setBurger(!burger);
  }

  return (
    <div>
      <nav className='md:flex justify-between my-14 text-lg font-bold hidden'>
        <img className='w-10 md:w-16' src={logo} alt='Logo' />
        <a href='#'>Home</a>
        <a href="#">About</a>
        <a href="#">Models</a>
        <a href="#">Testimonials</a>
        <a href="#">Our Team</a>
        <a href="#">Contact</a>
      </nav>

      <nav className='flex justify-between my-14 text-lg font-bold md:hidden'>
        <img className='w-10 md:w-16' src={logo} alt='Logo' />
        <FontAwesomeIcon icon={faBars} size='2xl' onClick={burgerDisplay} />
        {burger ? (
          <div className='flex flex-col absolute z-10 bg-white'>
            <a href='#'>Home</a>
            <a href="#">About</a>
            <a href="#">Models</a>
            <a href="#">Testimonials</a>
            <a href="#">Our Team</a>
            <a href="#">Contact</a>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
