import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const Contact = () => {
  return (
    <div
      className='bg-no-repeat bg-cover px-7 py-20 pb-0'
      style={{
        backgroundImage: "url(images/footer.jpg)",
      }}
    >
      <div className='container'>
        <div className='grid items-center justify-center gap-5 grid-cols-1 md:grid-cols-3 mb-20'>
          <div className='flex items-center flex-col text-center'>
            <Title color='amber-200' size='3xl'>
              Contact Us
              <TitleUnderline position='center' />
            </Title>
            <p className='text-white text-xl mb-5 leading-8'>
              call us: +213-356-8569
            </p>
            <p className='text-white text-xl mb-5 leading-8'>
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </p>
          </div>
          <div className='flex items-center flex-col text-center'>
            <Title color='amber-200' size='3xl'>
              Stay Connected
              <TitleUnderline position='center' />
            </Title>
            <p className='text-white text-xl mb-5 leading-8'>
              Subscribe & get 10% discount. <br />
              Get E-mail updates about our latest shop and special offers.
            </p>
            <form className='p-1 border border-amber-200 border-opacity-30 flex flex-nowrap'>
              <input className='w-full' type='email' placeholder='Your Email' />
              <Button label='Subscribe' />
            </form>
          </div>
          <div className='flex items-center flex-col text-center'>
            <Title color='amber-200' size='3xl'>
              Opening Time
              <TitleUnderline position='center' />
            </Title>
            <p className='text-white text-xl mb-5 leading-8'>
              Monday-Friday
              <br />
              <span className='text-amber-200 ml-2'>08:00 am -12:00 am </span>
            </p>
            <p className='text-white text-xl mb-5 leading-8'>
              Saturday-Sunday
              <br />
              <span className='text-amber-200 ml-2'>09:00 am -13:00 am </span>
            </p>
          </div>
        </div>
        <h2 className='text-xl text-center text-white border-t border-amber-100 border-opacity-10 py-5'>
          © gericht - 2023 all rights reserved by iqonic design | cloned with
          love by samia
        </h2>
      </div>
    </div>
  );
};

export default Contact;
