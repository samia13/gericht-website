import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const About = () => {
  return (
    <div className='bg-no-repeat relative bg-cover px-7 py-20'>
      <div
        style={{
          backgroundImage: "url(images/about-bg.jpg)",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      ></div>
      <div className='container flex items-center justify-center gap-5 flex-col md:flex-row'>
        <div className='flex items-center flex-col md:items-end flex-1 text-center md:text-right'>
          <Title color='amber-200' size='5xl'>
            About Us
            <TitleUnderline position='end' />
          </Title>
          <p className='text-white text-xl mb-5 leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button label='Know More' />
        </div>
        <div className='flex items-center flex-1 justify-center'>
          <span className='text-[30rem] absolute text-white opacity-10 uppercase'>
            G
          </span>
          <img
            className='max-w-full w-full h-[700px] object-contain relative'
            src='images/about1.png'
            alt='Hero image'
          />
        </div>
        <div className='flex items-center flex-col md:items-start flex-1 text-center md:text-left'>
          <Title color='amber-200' size='5xl'>
            Our History
            <TitleUnderline position='start' />
          </Title>
          <p className='text-white text-xl mb-5 leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button label='Know More' />
        </div>
      </div>
    </div>
  );
};

export default About;
