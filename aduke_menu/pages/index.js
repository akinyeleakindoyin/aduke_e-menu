import React, { useState, useEffect } from 'react';
import { BsSearch, BsWindowSidebar } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineHome } from 'react-icons/ai';
import { IoIosCall } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';

import Link from 'next/link';
// import Image from 'next/image';

import { MenuItems } from '../components';
import Head from 'next/head';
import { Banner, Menu, Footer } from '../components';

import { client } from '../lib/client';
import { urlFor } from '../lib/client';

const Home = ({
  maincourse,
  appetizerData,
  drinksData,
  lagosSpecialData,
  sideDishesData,
  soupData,
  specialOrderData,
  veganAppData,
  veganMainData,
}) => {
  const [menuList, setMenuList] = useState(false);

  const [searchMenu, setSearchMenu] = useState('');

  const [menuItem, setMenuItem] = useState([]);
  const [toggleDisplay, setToggleDisplay] = useState(true);

  const handleSearch = async (name) => {
    if (searchMenu) {
      const searchedMenu = maincourse
        .concat(
          soupData,
          veganAppData,
          veganMainData,
          appetizerData,
          specialOrderData,
          lagosSpecialData,
          drinksData,
          sideDishesData
        )
        .filter((item, index) => item.name.toLowerCase().includes(searchMenu));
      setSearchMenu('');
      setMenuItem(searchedMenu);
    }
  };

  const handleToggleDisplay = (e) => {
    e.preventDefault();
    setToggleDisplay(!toggleDisplay);
  };

  useEffect(() => {
    handleSearch('jollof combo');

    const toToggle = document.getElementById('home');
    toToggle.addEventListener('click', function () {
      document.getElementById('menu--list').classList.remove('hidden');
      document.getElementById('searchDisplay').classList.add('hidden');
    });

    if (menuItem?.length > 0) {
      document.getElementById('menu--list').classList.add('hidden');
      document.getElementById('searchDisplay').classList.remove('hidden');
    } else if (menuItem?.length === 0) {
      document.getElementById('searchDisplay').classList.remove('hidden');
      document.getElementById('menu--list').classList.add('hidden');

      toast.error('Sorry! We do not have that on menu today 😥');
    }
  }, [menuItem]);

  const handleMenu = () => {
    setMenuList(!menuList);
  };

  return (
    <>
      <div>
        <div className='bg-[#e89e30] w-full h-screen relative'>
          <div>
            <div
              id='home'
              className='flex flex-col items-center gap-4 fixed xs:left-2 sm:left-5 md:left-6 lg:left-6 top-[30%] cursor-pointer text-[#000] p-1 bg-black/20  shadow-gray-400 shadow-sm'
            >
              <AiOutlineHome
                id='home'
                onClick={handleToggleDisplay}
                size={20}
              />
            </div>
            <div className=' flex flex-col items-center gap-4 fixed xs:left-2 sm:left-5 md:left-6 lg:left-6 top-[50%] cursor-pointer'>
              <div className='text-[#000] shadow-gray-700 shadow-sm p-1'>
                <Link
                  href='https://www.facebook.com/adukescuisine/'
                  target='_blank'
                >
                  <FaFacebookF size={20} />
                </Link>
              </div>
              <div className='text-[#000]  shadow-gray-700 shadow-sm p-1'>
                <Link
                  href='https://www.tiktok.com/@adukecuisine'
                  target='_blank'
                >
                  <FaTiktok size={20} />
                </Link>
              </div>
              <div className='text-[#000]  shadow-gray-700 shadow-sm p-1'>
                <Link
                  href='https://www.instagram.com/adukecuisine/?hl=en'
                  target='_blank'
                >
                  <AiOutlineInstagram size={20} />
                </Link>
              </div>
              <div className='text-[#000]  shadow-gray-700 shadow-sm p-1'>
                <Link href='tel:1213-261-0737'>
                  <IoIosCall size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Searchbar and vegan toggle section */}

          <div className='ml-20 md:ml-20 xs:ml-12'>
            <div className='bg-[#000] h-screen overflow-y-scroll overflow-x-hidden px-10 relative'>
              <div>
                <div>
                  <div className='flex xs:flex-col items-center justify-center mt-4 gap-3 sm:justify-around xs:gap-3 lg:justify-around md:justify-around'>
                    {/* <div className='justify-start'> */}
                    <div className='relative'>
                      <input
                        id='searchInput'
                        type='text'
                        value={searchMenu}
                        onChange={(e) =>
                          setSearchMenu(e.target.value.toLowerCase())
                        }
                        className='h-8 w-[100%] px-3'
                        placeholder='Search Menu'
                      />
                      <BsSearch
                        id='searchIcon'
                        onClick={handleSearch}
                        className='absolute right-0 bottom-2 mr-2 text-[#e89e30] font-bold cursor-pointer'
                      />
                    </div>
                    {/* </div> */}
                    <div>
                      <button
                        onClick={handleMenu}
                        className={
                          !menuList
                            ? 'bg-[#51cf66] sm:text-xs xs:text-xs'
                            : 'bg-[#e89e30] sm:text-xs xs:text-xs'
                        }
                      >
                        {!menuList ? 'Vegan?' : 'Non-Vegan?'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Display Search Result section */}
              <div id='searchDisplay'>
                <div>
                  <div>
                    <div className='ml-20 sm:ml-6 xs:mx-2 mt-10 lg:mx-20 md:mx-10 sm:mx-10'>
                      {/* container for header and botton */}
                      <div className='flex justify-between items-center'>
                        <h2 className='text-[#e89e30] uppercase text-sm md:text-xl lg:text-[24px]'>
                          Search Results
                        </h2>
                      </div>
                      <hr />
                      {menuItem?.length > 0 ? (
                        <div className='mt-4'>
                          {menuItem?.map((list) => (
                            <MenuItems
                              key={list._id}
                              image={list.image}
                              name={list.name}
                              price={list.price}
                              details={list.details}
                              category={list.category}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className='mt-4 z-50'>
                          <Toaster position='top-center' reverseOrder={false} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Menu List section */}

              {/* this div controls the display on medium and large devices */}

              <div className='lg:mx-10'>
                <div id='menu--list'>
                  <div className='lg:px-20 md:px-10'>
                    <div className=' sm:ml-6 mt-10 '>
                      <div className='flex flex-col xs:w-[100%]'>
                        <div>
                          <h2 className='text-[#e89e30] uppercase text-sm md:text-[20px] lg:text-[24px] '>
                            {`${
                              !menuList ? '' : 'Vegan '
                            }Appetizers and snacks`}
                          </h2>
                          <hr />
                          <div className='mt-4'>
                            {!menuList
                              ? appetizerData?.map((item) => (
                                  <MenuItems
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                  />
                                ))
                              : veganAppData.map((item) => (
                                  <MenuItems
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                  />
                                ))}
                          </div>
                        </div>
                        <div>
                          <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                            {`${!menuList ? '' : 'Vegan '} Maincourse Meal`}
                          </h2>
                          <hr />
                          <div className='mt-4'>
                            {!menuList
                              ? maincourse?.map((item) => (
                                  <MenuItems
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                  />
                                ))
                              : veganMainData.map((item) => (
                                  <MenuItems
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    details={item.details}
                                  />
                                ))}
                          </div>
                        </div>
                        <div className={!menuList ? '' : 'hidden'}>
                          <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                            Soups
                          </h2>
                          <hr />
                          <div className='mt-4'>
                            {soupData?.map((item) => (
                              <MenuItems
                                key={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                details={item.details}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className={!menuList ? '' : 'hidden'}>
                            <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                              Lagos Specials
                            </h2>
                            <hr />
                            <div className='mt-4'>
                              {lagosSpecialData?.map((item) => (
                                <MenuItems
                                  key={item._id}
                                  image={item.image}
                                  name={item.name}
                                  price={item.price}
                                  details={item.details}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={!menuList ? '' : 'hidden'}>
                          <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                            Side Dishes
                          </h2>
                          <hr />
                          <div className='mt-4'>
                            {sideDishesData?.map((item) => (
                              <MenuItems
                                key={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                details={item.details}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                            Drinks
                          </h2>
                          <hr />
                          <div className='mt-4'>
                            {drinksData?.map((item) => (
                              <MenuItems
                                key={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                details={item.details}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className={!menuList ? 'mb-8' : 'hidden'}>
                            <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 lg:text-[24px]'>
                              Special Orders
                            </h2>
                            <hr />
                            <div className='mt-4'>
                              {specialOrderData?.map((item) => (
                                <MenuItems
                                  key={item._id}
                                  image={item.image}
                                  name={item.name}
                                  price={item.price}
                                  details={item.details}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* second column for lg devices */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const maincourseQuery = '*[_type == "maincourse"]';
  const maincourse = await client.fetch(maincourseQuery);

  const appetizerQuery = '*[_type == "appetizers"]';
  const appetizerData = await client.fetch(appetizerQuery);

  const drinksQuery = '*[_type == "drinks"]';
  const drinksData = await client.fetch(drinksQuery);

  const lagosQuery = '*[_type == "lagosSpecials"]';
  const lagosSpecialData = await client.fetch(lagosQuery);

  const sideDishesQuery = '*[_type == "sideDishes"]';
  const sideDishesData = await client.fetch(sideDishesQuery);

  const soupQuery = '*[_type == "soups"]';
  const soupData = await client.fetch(soupQuery);

  const specialOrderQuery = '*[_type == "specialOrders"]';
  const specialOrderData = await client.fetch(specialOrderQuery);

  const veganAppQuery = '*[_type == "veganAppetizers"]';
  const veganAppData = await client.fetch(veganAppQuery);

  const veganMainQuery = '*[_type == "veganMaincourse"]';
  const veganMainData = await client.fetch(veganMainQuery);

  return {
    props: {
      maincourse,
      appetizerData,
      drinksData,
      lagosSpecialData,
      sideDishesData,
      soupData,
      specialOrderData,
      veganAppData,
      veganMainData,
    },
  };
};

export default Home;
