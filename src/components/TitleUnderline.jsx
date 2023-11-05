import React from "react";

const Spoon = ({ position = "start" }) => {
  return (
    <span
      className={`absolute flex items-center sm:justify-center w-full md:justify-${position}`}
    >
      <span className='block w-10 h-1 rounded bg-transparent border border-amber-100'></span>
      <span className='block w-3 h-3 rounded-md border border-amber-100'></span>
    </span>
  );
};

export default Spoon;
