import React from "react";

const Title = ({ size = "3xl", color = "white", children }) => {
  return (
    <h2 className={`mb-5 text-${size} relative pb-2 w-fit text-${color}`}>
      {children}
    </h2>
  );
};

export default Title;
