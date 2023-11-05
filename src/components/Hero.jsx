import React from "react";
import { Button } from "./index";

const Hero = () => {
  return (
    <div className='bg-black px-7 pt-11 pb-16'>
      <div className='container flex items-center justify-center gap-10 sm:flex-col md:flex-row'>
        <div className='flex-1 sm:text-center md:text-left'>
          <h2 className='text-white mb-5 text-3xl relative pb-2'>
            Chase The New Flavour
            <span className='block absolute sm:left-1/2 sm:translate-x-[-20px]	md:translate-x-0 md:left-0  w-10 h-1 -bottom-1 rounded bg-transparent border border-amber-100'></span>
            <span className='block absolute sm:left-1/2 sm:translate-x-[20px]	md:translate-x-0 md:left-10 w-3 h-3 -bottom-2 rounded-md border border-amber-100'></span>
          </h2>
          <h1 className='text-amber-200 text-8xl mb-5'>
            The Key To Fine Dining
          </h1>
          <p className='text-white text-xl mb-5 leading-8'>
            Gericht: Where exquisite flavors meet elegant ambiance, creating
            unforgettable dining moments in the heart of the city.
          </p>
          <Button label='Explore Menu' />
        </div>
        <div className='flex-1 relative flex justify-center'>
          <sapn className='absolute z-0 -right-[20px] -top-5 w-2/4 h-3/5 bg-amber-200 '></sapn>
          <span className='absolute z-0 -left-[20px] -bottom-5 w-2/4 h-3/5 bg-amber-200 '></span>
          <img
            className='w-full max-h-full object-cover relative'
            src='images/hero1.png'
            alt='Hero image'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
