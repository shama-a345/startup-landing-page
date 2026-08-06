import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Gallery', href: '#' },
  ];

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <nav className='flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-4 bg-blue-50/50'>
        <a href="/">
          <p className='font-serif text-2xl sm:text-3xl hover:text-blue-700 cursor-pointer font-bold'>
            STARTER
          </p>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 font-serif text-base lg:text-lg'>
          {navLinks.map((link) => (
            <li key={link.name} className='hover:text-blue-700 transition duration-300'>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li className='border border-blue-500 rounded-full text-white bg-blue-400 px-4 py-1 hover:bg-white transition duration-500 hover:text-blue-400'>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button onClick={toggleMenu} className='md:hidden text-gray-700 focus:outline-none focus:text-blue-700' aria-label="Toggle navigation menu">
          <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className='md:hidden bg-white border-b border-gray-200 px-6 pt-2 pb-6 shadow-lg'>
          <ul className='flex flex-col gap-4 font-serif text-lg'>
            {navLinks.map((link) => (
              <li key={link.name} className='hover:text-blue-700 transition duration-300'>
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
            <li className='inline-block border border-blue-500 rounded-full text-white bg-blue-400 px-4 py-1.5 hover:bg-white transition duration-500 hover:text-blue-400 text-center mt-2'>
              <a href="#" onClick={() => setIsOpen(false)}>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
      <hr className='border-t-gray-200' />
    </div>
  );
};

export default Navbar;