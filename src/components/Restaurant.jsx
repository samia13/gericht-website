import React from "react";
import { Play } from "react-feather";

const Restaurant = () => {
  return (
    <div className='h-screen flex justify-center items-center relative bg-[url(images/restaurant.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-40'></div>
      <span className='video-icon relative p-10 block rounded-full bg-amber-200 font-bold'>
        <Play className='text-4xl relative z-10' />
      </span>
    </div>
  );
};

export default Restaurant;
