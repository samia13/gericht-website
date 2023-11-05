import React from "react";
import { TitleUnderline, Title, Button } from "./index";

const Reservation = () => {
  return (
    <div className='px-7 py-20 bg-zinc-900'>
      <div className='container flex flex-col items-center'>
        <Title color='amber-200'>
          Reservations
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-6xl mb-10'>Book A Table</h2>
        <form className='reservationForm flex justify-between gap-6 mb-10'>
          <input type='text' name='person-nb' value='1 person' />
          <input type='text' name='date' value='JJ/MM/AAAA' />
          <input type='text' name='time' value='10AM' />
        </form>
        <Button label='Book Now' />
      </div>
    </div>
  );
};

export default Reservation;
