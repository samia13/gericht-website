import React from "react";
import { TitleUnderline, Title, Button } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Carousel = () => {
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
      <div className='container flex flex-col items-center justify-center gap-5 mb-10'>
        <Title color='amber-200'>
          Gallery
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-center text-4xl sm:text-6xl mb-10'>
          Photo Gallery
        </h2>
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
