import React, { useState, useEffect, useContext } from 'react';
import amalaImg from '../public/assets/images/gbegiri_amala.webp';
import { BsSearch, BsWindowSidebar } from 'react-icons/bs';

import Image from 'next/image';
// import { useStateContext } from '../context/StateContext';

const Banner = () => {
  // useEffect(() => {
  //   if (!menuList) {
  //     document
  //       .getElementById('btn')
  //       .classList.add(
  //         'bg-[#51cf66] sm:text-[6px] xs:text-[8px]  md:text-[8px] md:p-2 lg:text-[8px] lg:p-2 xs:p-1 xs:my-2 sm:p-1 '
  //       );
  //   } else {
  //     document
  //       .getElementById('btn')
  //       .classList.add(
  //         'bg-[#e89e30] sm:text-[6px] xs:text-[8px]  md:text-[8px] md:p-2 lg:text-[8px] lg:p-2 xs:p-1 xs:my-2 sm:p-1'
  //       );
  //   }
  // });

  // const toggleButtonName = () => {
  //   !menuList ? 'Vegan' : 'Non-vegan';
  // };

  // const [menuList, setMenuList] = useState(false);
  // const [menuItem, setMenuItem] = useState([]);
  // const [searchMenu, setSearchMenu] = useState('');

  // const handleMenu = () => {
  //   setMenuList(!menuList);
  // };

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

        {/* This is the container for searchbar and vegan-toggle button */}

        {/* <div className='xs:w-50'>
          <div className='flex items-center justify-center gap-3 z-50 mr-3 lg:mr-8 md:mr-8  '>
            <div className='relative'>
              <div>
                <input
                  id='input--bar'
                  type='text'
                  className='lg:h-[1vh] xs:h-[2.5vh]  sm:p-1 xs:p-1 md:h-[1vh]
                 xs:placeholder:text-[9px] lg:p-3 md:p-3 xs:w-[100px] xs:rounded-l-lg xs:rounded-r-lg'
                  placeholder='Search Menu'
                />
                <BsSearch
                  id='searchIcon'
                  size={10}
                  onClick={() => {}}
                  className='absolute right-0 bottom-2 xs:bottom-1.5  mr-2 text-[#e89e30] font-bold cursor-pointer'
                />
              </div>
            </div>
            <div className=' lg:p-1'>
              <button
                id='btn'
                onClick={handleMenu}
                className={
                  !menuList
                    ? 'bg-[#51cf66] sm:text-[6px] xs:text-[8px]  md:text-[8px] md:p-2 lg:text-[8px] lg:p-2 xs:p-1 xs:my-2 sm:p-1'
                    : 'bg-[#e89e30] sm:text-[6px] xs:text-[8px]  md:text-[8px] md:p-2 lg:text-[8px] lg:p-2 xs:p-1 xs:my-2 sm:p-1'
                }
              >
                {!menuList ? 'Vegan' : 'Non-vegan'}
              </button>
            </div>
          </div>
        </div> */}
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
