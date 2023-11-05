import React from "react";

const Button = ({ type = "primary", label }) => {
  if (type === "primary") {
    return (
      <button className='text-black px-6 py-3 bg-amber-200 border-none outline-0 font-bold text-lg pointer-events-auto'>
        {label}
      </button>
    );
  } else {
    return <span className='text-amber-200'>{label}</span>;
  }
};

export default Button;
