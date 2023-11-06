import React from "react";
import { Title, TitleUnderline, Button } from "./index";

const ChefWord = () => {
  const quoteStyles = {
    backgroundImage: "url(images/quote.png)",
    width: "25px",
    height: "25px",
    display: "inline-block",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginBottom: "-6px",
    marginRight: "7px",
  };
  return (
    <div className='bg-[url(images/about-bg.jpg)] bg-no-repeat bg-cover px-7 py-20'>
      <div className='container flex items-center justify-center gap-20 sm:flex-col md:flex-row'>
        <div className='flex-1 relative flex justify-center  hover:skew-y-3 duration-700'>
          <span className='absolute z-0 right-[2%] -top-5 w-[40%] h-3/5 bg-amber-200 '></span>
          <span className='absolute z-0 left-[2%] -bottom-5 w-[40%] h-3/5 bg-amber-200 '></span>
          <img
            className='w-[90%] max-h-[700px] object-cover relative'
            src='images/chef.jpg'
            alt='Hero image'
          />
        </div>
        <div className='flex sm:items-center flex-col md:items-start flex-1 sm:text-center md:text-left'>
          <Title>
            Executive Chef
            <TitleUnderline position='start' />
          </Title>
          <h1 className='text-amber-200 text-5xl mb-5'>
            What We BelieveBelieve In
          </h1>
          <p className='text-white text-sm mb-5 opacity-70 italic'>
            <span style={quoteStyles}></span>
            Lauctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam as
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.Vulputate nulla lobortis mauris eget sit. Lauctor sit iaculis
            in arcu. Vulputate nulla lobortis mauris eget sit.
          </p>
          <h3 className='text-white font-bold text-2xl'>Kevin Luo</h3>
          <p className='text-white opacity-60 mb-7'> Chef & Founder</p>
          <img
            className='h-20'
            src='images/signature.png'
            alt='Chef signature'
          />
        </div>
      </div>
    </div>
  );
};

export default ChefWord;
