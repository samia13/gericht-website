import React from "react";
import { TitleUnderline, Title, Button } from "./index";
const Blog = () => {
  return (
    <div className='bg-black px-7 py-20'>
      <div className='container flex flex-col items-center'>
        <Title color='amber-200'>
          Our Blog
          <TitleUnderline position='center' />
        </Title>
        <h2 className='text-white text-6xl mb-10'>Gerícht Updates</h2>
        <div className='flex justify-center items-center gap-10 md:flex-col lg:flex-row'>
          <article className='blog-article'>
            <div className='overflow-hidden h-[350px] mb-5'>
              <img
                className='h-full max-wfull object-cover'
                src='/images/blog-1.jpg'
                alt='Blog 1'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-white'>05 November 2023</span>
              <h2 className='text-amber-200 text-3xl'>
                Make Delicious Food With High Protein
              </h2>
              <p className='text-white opacity-70'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                in...
              </p>
              <Button label='Read More' type='secondary' />
            </div>
          </article>
          <article className='blog-article'>
            <div className='overflow-hidden h-[350px] mb-5'>
              <img
                className='h-full max-wfull object-cover'
                src='/images/blog-2.jpg'
                alt='Blog 2'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-white'>05 November 2023</span>
              <h2 className='text-amber-200 text-3xl'>
                Make Delicious Food With High Protein
              </h2>
              <p className='text-white opacity-70'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                in...
              </p>
              <Button label='Read More' type='secondary' />
            </div>
          </article>
          <article className='blog-article'>
            <div className='overflow-hidden h-[350px] mb-5'>
              <img
                className='h-full max-wfull object-cover'
                src='/images/blog-3.jpg'
                alt='Blog 3'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <span className='text-white'>05 November 2023</span>
              <h2 className='text-amber-200 text-3xl'>
                Make Delicious Food With High Protein
              </h2>
              <p className='text-white opacity-70'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                in...
              </p>
              <Button label='Read More' type='secondary' />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
