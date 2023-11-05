import React, { useState } from "react";
const columns = [
  { Title: "Main Course", src: "images/gallery1.jpg" },
  { Title: "Mocktail Menu", src: "images/gallery2.jpg" },
  { Title: "Best Dessert", src: "images/gallery3.jpg" },
];
const FoodGallery = () => {
  const [activeBg, setActiveBg] = useState(columns[0].src);
  const [ZoomMode, setZoomMode] = useState(false);

  function handleColumnHover(src) {
    setActiveBg(src);
    setZoomMode(true);
  }

  const backgroundStyles = {
    backgroundImage: `url(${activeBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "0.7s ease", // Add the transition effect here
  };

  return (
    <div
      className='flex sm:flex-col md:flex-row min-h-[700px] overflow-hidden relative food-gallery'
      style={backgroundStyles}
    >
      <div className='absolute w-full h-full z-0 bg-black opacity-30 '></div>
      {columns.map((column, index) => (
        <div
          key={index}
          className='column flex flex-1 justify-end flex-col p-5 gap-4 sm:border-b md:border-r border-white border-opacity-10 hover:backdrop-blur-sm z-10 font-bold'
          onMouseEnter={() => handleColumnHover(column.src)}
        >
          <h2 className='text-3xl text-white transition duration-500'>
            {column.Title}
          </h2>
          <p className='text-lg text-white transition-all duration-500 overflow-hidden translate-y-5 opacity-0 h-0'>
            Lorem ipsum dolor sit amet. consectetur adipiscing elit auctor sit.
          </p>
          <span className='text-amber-200'>Read more</span>
        </div>
      ))}
    </div>
  );
};

export default FoodGallery;
