import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const Awards = () => {
  return (
    <div className='px-7 py-20 bg-zinc-900'>
      <div className='container flex flex-col items-center'>
        <Title color='amber-200'>
          Awards & Recognition
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-6xl mb-10 text-center'>
          Our LaurelsLaurels
        </h2>
        <div className='flex items-center justify-center flex-col md:flex-row gap-5'>
          <div className='flex flex-1 gap-3 flex-col'>
            <div className='flex gap-6 items-start'>
              <div className='flex flex-col items-end text-right'>
                <Title color='amber-200' size='3xl'>
                  Rising Star
                  <TitleUnderline position='end' />
                </Title>
                <p className='text-white text-xl mb-5 leading-8'>
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <img
                className='h-20 md:hidden lg:block '
                src='images/award1.png'
                alt='award'
              />
            </div>
            <div className='flex gap-6 items-start'>
              <div className='flex flex-col items-end text-right'>
                <Title color='amber-200' size='3xl'>
                  Outstanding Chef
                  <TitleUnderline position='end' />
                </Title>
                <p className='text-white text-xl mb-5 leading-8'>
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <img
                className='h-20 md:hidden lg:block'
                src='images/award2.png'
                alt='award'
              />
            </div>
          </div>
          <div className='flex flex-1'>
            <img
              className='max-w-full w-full h-[300px] object-contain relative scale-85'
              src='images/awards.png'
              alt='Hero image'
            />
          </div>
          <div className='flex flex-1 gap-3 flex-col'>
            <div className='flex gap-6 items-start flex-row-reverse'>
              <div className='flex flex-col items-start text-left'>
                <Title color='amber-200' size='3xl'>
                  Bib Gourmond
                  <TitleUnderline position='start' />
                </Title>
                <p className='text-white text-xl mb-5 leading-8'>
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <img
                className='h-20 md:hidden lg:block'
                src='images/award3.png'
                alt='award'
              />
            </div>
            <div className='flex gap-6 items-start flex-row-reverse'>
              <div className='flex flex-col items-start text-left'>
                <Title color='amber-200' size='3xl'>
                  A Hospitality
                  <TitleUnderline position='start' />
                </Title>
                <p className='text-white text-xl mb-5 leading-8'>
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
              <img
                className='h-20 md:hidden lg:block'
                src='images/award4.png'
                alt='award'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
