import React from 'react';
import amalaImg from '../public/assets/images/gbegiri_amala.webp';

import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <div className='w-screen z-40 md:h-[5vh] lg:h-[6vh] sm:h-[4vh] xs:h-[4vh] bg-black flex items-center justify-between'>
        <div id='welcome' className='md:ml-8 flex items-center gap-3'>
          <h2 className='uppercase ml-4 mt-1 xs:text-sm md:text-lg lg:text-2xl xs:mt-[1px] sm:text-sm '>
            Aduke <span className='text-green-500'>Ni</span>
            <span className='text-white'>ger</span>
            <span className='text-green-500'>ian</span> Cuisine
          </h2>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-screen md:h-[12vh] xs:h-[10vh] sm:h-[10vh] lg:h-[16vh] relative'>
          <div className='absolute top-0 w-full md:h-[12vh] sm:h-[10vh] lg:h-[16vh] xs:h-[10vh] bg-black/40 z-20' />
          <Image
            className='absolute z-10'
            layout='fill'
            objectFit='cover'
            src={amalaImg}
            alt='a picture of amala'
          />
          <div className='absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 z-40 '>
            <div className='p-3 px-6  bg-[#e89e30]/80 lg:p-6'>
              <h1 className='z-9999 uppercase sm:text-xl xs:text-lg md:text-4xl lg:text-[50px] xl:text-[50px] '>
                Serving Today
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
