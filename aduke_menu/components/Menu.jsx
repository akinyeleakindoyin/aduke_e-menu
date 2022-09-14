// import React, { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';
// import { FaFacebookF, FaTiktok } from 'react-icons/fa';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import { IoIosCall } from 'react-icons/io';

// import MenuItems from './MenuItems';
// // import MenuImage from './MenuImage';
// // import ogbonoImg from '../public/assets/images/ogbono.webp';
// // import amalaImg from '../public/assets/images/gbegiri_amala.webp';
// // import afangImg from '../public/assets/images/afang-soup.webp';
// import {
//   Appetizers,
//   Maincourse,
//   Drinks,
//   Specials,
//   VeganMenu,
// } from '../public/data/menu';

// import { client } from '../lib/client';

// const Menu = ({
//   maincourse,
//   appetizerData,
//   drinksData,
//   lagosSpecialData,
//   sideDishesData,
//   soupData,
//   specialOrderData,
//   veganAppData,
//   veganMainData,
// }) => {
//   const [menuList, setMenuList] = useState(false);
//   // const [available, setAvailable] = useState(true);

//   const handleMenu = () => {
//     setMenuList(!menuList);
//   };

//   // const handleAvailable = () => {
//   //   Maincourse.filter((item) => {
//   //     setAvailable(available);
//   //     if (item.Available === 'available') {
//   //       <MenuItems
//   //         key={item.ID}
//   //         Image={item.Image}
//   //         Name={item.Name}
//   //         Details={item.Detail}
//   //         Price={item.Price}
//   //       />;
//   //     } else {
//   //       ('');
//   //     }
//   //   });
//   // };

//   return (
//     <div>
//       <div className='bg-[#e89e30] w-full h-screen relative'>
//         <div>
//           <div className=' flex flex-col items-center gap-4 fixed xs:left-4 sm:left-4 md:left-8 lg:left-8 top-[40%] cursor-pointer'>
//             <div className='text-[#000]'>
//               <FaFacebookF />
//             </div>
//             <div className='text-[#000]'>
//               <FaTiktok />
//             </div>
//             <div className='text-[#000]'>
//               <AiOutlineInstagram />
//             </div>
//             <div className='text-[#000]'>
//               <IoIosCall />
//             </div>
//           </div>
//         </div>

//         <div className='ml-20 md:ml-20 xs:ml-12'>
//           <div className='bg-[#000] h-screen overflow-y-scroll overflow-x-hidden px-10 relative'>
//             {/* <div className='flex justify-between md:justify-around lg:justify-around sm:flex-col sm:items-center  xs:flex-col xs:items-center  '> */}
//             <div className='lg:mx-60'>
//               <div className='mt-4 flex xs:flex-col xs:gap-3 items-center justify-between'>
//                 <div className='flex relative'>
//                   <input
//                     type='text'
//                     className='h-8 w-[100%] px-3'
//                     placeholder='Search Menu'
//                   />
//                   <BsSearch className='absolute right-0 bottom-2 mr-2 text-[#e89e30] font-bold' />
//                 </div>
//                 <div className='justify-end'>
//                   <button
//                     onClick={handleMenu}
//                     className={!menuList ? 'bg-[#51cf66]' : 'bg-[#e89e30]'}
//                   >
//                     {!menuList ? 'Vegan?' : 'Non-Vegan?'}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* <div text-[#e89e30]>
//               <AiOutlineInstagram />
//               <IoIosCall />
//               <FaTiktok />
//               <FaFacebookF />
//             </div> */}
//             <div className='flex items-center justify-center md:justify-around lg:justify-around md:mr-20 xs:w-[100%]'>
//               <div className='ml-20 sm:ml-6 xs:mx-2 mt-10'>
//                 <h2 className='text-[#e89e30] uppercase text-sm md:text-xl '>
//                   {`${!menuList ? '' : 'Vegan '}Appetizers and snacks`}
//                 </h2>
//                 <hr />
//                 <div className='mt-4'>
//                   {appetizerData.map((item) => (
//                     <MenuItems key={item._id} item={item} />
//                   ))}
//                 </div>
//                 <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 '>
//                   {`${!menuList ? '' : 'Vegan '}Maincourse Meal`}
//                 </h2>
//                 <hr />
//                 <div className='mt-4'>
//                   {!menuList
//                     ? maincourse?.map((item) => (
//                         <MenuItems key={item._id} item={item} />
//                       ))
//                     : veganMainData.map((item) => (
//                         <MenuItems key={item._id} item={item} />
//                       ))}
//                 </div>
//                 <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6'>
//                   Drinks
//                 </h2>
//                 <hr />
//                 <div className='mt-4'>
//                   {drinksData.map((item) => (
//                     <MenuItems key={item._id} item={item} />
//                   ))}
//                 </div>
//               </div>

//               {/* <div>
//                 <div className='sm:flex xs:flex sm:mt-8 xs:mt-8 sm:space-x-1 xs:space-x-1 sm:p-4 sm:items-center sm:justify-center sm:flex-nowrap xs:flex-nowrap xs:items-center xs:pl-20 '>
//                   {Specials.map((item) => (
//                     <MenuImage
//                       key={item.ID}
//                       img={item.Image}
//                       title={item.Title}
//                       price={item.Price}
//                     />
//                   ))}
//                 </div>
//               </div> */}
//               {/* </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   const maincourseQuery = '*[_type == "maincourse"]';
//   const maincourse = await client.fetch(maincourseQuery);

//   const appetizerQuery = '*[_type == "appetizers"]';
//   const appetizerData = await client.fetch(appetizerQuery);

//   const drinksQuery = '*[_type == "drinks"]';
//   const drinksData = await client.fetch(drinksQuery);

//   const lagosQuery = '*[_type == "lagosSpecials"]';
//   const lagosSpecialData = await client.fetch(lagosQuery);

//   const sideDishesQuery = '*[_type == "sideDishes"]';
//   const sideDishesData = await client.fetch(sideDishesQuery);

//   const soupQuery = '*[_type == "soups"]';
//   const soupData = await client.fetch(soupQuery);

//   const specialOrderQuery = '*[_type == "specialOrders"]';
//   const specialOrderData = await client.fetch(specialOrderQuery);

//   const veganAppQuery = '*[_type == "veganAppetizers"]';
//   const veganAppData = await client.fetch(veganAppQuery);

//   const veganMainQuery = '*[_type == "veganMaincourse"]';
//   const veganMainData = await client.fetch(veganMainQuery);

//   return {
//     props: {
//       maincourse,
//       appetizerData,
//       drinksData,
//       lagosSpecialData,
//       sideDishesData,
//       soupData,
//       specialOrderData,
//       veganAppData,
//       veganMainData,
//     },
//   };
// };

// export default Menu;
