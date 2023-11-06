import React from "react";

const Spoon = ({ position, customStyle = {} }) => {
  const linePosition = position || "center";
  return (
    <span
      className={`absolute flex items-center w-full justify-${linePosition}`}
      style={customStyle}
    >
      <span className='block w-10 h-1 rounded bg-transparent border border-amber-100'></span>
      <span className='block w-1 h-[1px] bg-amber-100 '></span>
      <span className='block w-3 h-3 rounded-md border border-amber-100'></span>
    </span>
  );
};

export default Spoon;
