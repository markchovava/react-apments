import React from 'react';
import Search from '../components/Search'
import Image from '../assets/img/house-banner.png'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
        lg:items-start text-center lg:text-left justify-center flex-1 px-4'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> your Dream House with us.
          </h1>
          <p className='mx-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            At sint iste nesciunt libero consequatur nobis voluptatem 
            ut distinctio! Exercitationem, doloremque?
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />

    </section>)
  };

export default Banner;
