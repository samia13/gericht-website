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
        <h2 className='text-white text-6xl mb-10 text-center'>
          Taste The Royal Cuisine
        </h2>
        <p className='text-xl text-white mb-12 text-center max-w-4xl'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look believable.
        </p>
        <div className='direction-img flex justify-center items-center gap-10 mb-12 sm:flex-col md:flex-row flex-wrap'>
          <img src='images/direction1.jpeg' alt='Direction 1' />
          <img src='images/direction2.jpeg' alt='Direction 2' />
          <img src='images/direction3.jpeg' alt='Direction 3' />
        </div>
        <Button label='Get Directions' />
      </div>
    </div>
  );
};

export default Direction;
