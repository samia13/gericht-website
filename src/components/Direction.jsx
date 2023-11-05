import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const Direction = () => {
  return (
    <div className='px-7 py-20 bg-zinc-900'>
      <div className='container flex flex-col items-center'>
        <Title color='amber-200'>
          Stylish Cuisine
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-6xl mb-10'>
          Experience The Fine CuisineCuisine
        </h2>
        <div className='flex justify-center items-center gap-10 mb-12'>
          <img
            className='h-[350px] '
            src='images/direction1.png'
            alt='Direction 1'
          />
          <img
            className='h-[350px] '
            src='images/direction2.png'
            alt='Direction 2'
          />
          <img
            className='h-[350px] '
            src='images/direction3.png'
            alt='Direction 3'
          />
        </div>
        <Button label='Get Directions' />
      </div>
    </div>
  );
};

export default Direction;
