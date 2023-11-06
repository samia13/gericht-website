import React from "react";

const Hamburger = ({ toggleMenu }) => {
  function handleClick() {
    toggleMenu();
  }
  return (
    <div
      className='mobile-menu flex md:hidden flex-col w-8 gap-2 items-end cursor-pointer'
      onClick={handleClick}
    >
      <span className='w-full h-[2px] rounded-md bg-amber-100'></span>
      <span className='w-2/3 h-[2px] rounded-md bg-amber-100'></span>
      <span className='w-2/5 h-[2px] rounded-md bg-amber-100'></span>
    </div>
  );
};

export default Hamburger;
