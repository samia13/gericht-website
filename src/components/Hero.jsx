import React from "react";
import { Button, TitleUnderline, Title } from "./index";

const Hero = () => {
  return (
    <div className='bg-black px-7 pt-11 pb-16'>
      <div className='container min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20'>
        <div className='flex items-center flex-col md:items-start text-center md:text-left'>
          <Title>
            Chase The New Flavour
            <TitleUnderline position='start' />
          </Title>
          <h1 className='text-amber-200 text-8xl mb-5'>
            The Key To Fine Dining
          </h1>
          <p className='text-white text-xl mb-5 leading-8'>
            Gericht: Where exquisite flavors meet elegant ambiance, creating
            unforgettable dining moments in the heart of the city.
          </p>
          <Button label='Explore Menu' />
        </div>
        <div className='relative flex justify-center'>
          <span className='absolute z-0 right-[2%] -top-5 w-[40%] h-3/5 bg-amber-200 '></span>
          <span className='absolute z-0 left-[2%] -bottom-5 w-[40%] h-3/5 bg-amber-200 '></span>
          <img
            className='w-[90%] object-cover relative'
            src='images/hero1.png'
            alt='Hero image'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
