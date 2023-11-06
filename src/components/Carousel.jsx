import React from "react";
import { TitleUnderline, Title, Button } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Carousel = () => {
  return (
    <div className='bg-[url("images/about-bg.jpg")] bg-no-repeat bg-cover px-7 py-20 '>
      <div className='container flex flex-col items-center justify-center gap-5 mb-10'>
        <Title color='amber-200'>
          Gallery
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-6xl mb-10'>Photo Gallery</h2>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {[...Array(12).keys()].map((_, i) => (
          <SwiperSlide
            key={i}
            className='sm:'
            style={{
              height: i % 2 == 0 ? "360px" : "460px",
              overflow: "hidden",
              transform: i % 2 == 0 ? "translateY(50px)" : "translateY(0)",
            }}
          >
            <img
              key={i}
              className='object-cover w-full h-full hover:scale-125 hover:rotate-6 duration-700 '
              src={`images/carousel${i + 1}.jpg`}
              alt={`Carousel image ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
