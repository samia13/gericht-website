import React from "react";
import { Search, ShoppingCart } from "react-feather";
const Header = () => {
  return (
    <header className='p-7 bg-black text-white border-b border-b-zinc-700 '>
      <div className='container flex justify-between items-center'>
        <h1 className='text-white text-4xl'>Gericht</h1>
        <nav className='hidden md:block'>
          <ul className='flex gap-5 justify-center text-xl'>
            <li className='hover:opacity-60'>
              <a href='#'>Home</a>
            </li>
            <li className='hover:opacity-60'>
              <a href='#'>About</a>
            </li>
            <li className='hover:opacity-60'>
              <a href='#'>Menu</a>
            </li>
            <li className='hover:opacity-60'>
              <a href='#'>Work</a>
            </li>
            <li className='hover:opacity-60'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-center gap-4'>
          <Search className='hover:opacity-60' />
          <ShoppingCart className='hover:opacity-60' />
        </div>
      </div>
    </header>
  );
};

export default Header;
