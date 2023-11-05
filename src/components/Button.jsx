import React from "react";

const Button = ({ type = "primary", label }) => {
  return (
    <button className='text-black px-6 py-3 bg-amber-200 border-none outline-0 font-bold text-lg'>
      {label}
    </button>
  );
};

export default Button;
