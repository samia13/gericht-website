import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const Reservation = () => {
  return (
    <div className='px-7 py-40  bg-zinc-900'>
      <div className='container flex flex-col items-center'>
        <Title color='amber-200'>
          Reservations
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-4xl sm:text-6xl mb-10 text-center'>
          Book A Table
        </h2>
        <form className='reservationForm flex flex-col md:flex-row justify-evenly gap-8 mb-10'>
          <input type='text' name='person-nb' placeholder='1 person' />
          <input type='text' name='date' placeholder='JJ/MM/AAAA' />
          <input type='text' name='time' placeholder='10AM' />
        </form>
        <Button label='Book Now' />
      </div>
    </div>
  );
};

export default Reservation;
