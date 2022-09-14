// import React, { useState } from 'react';
// import Link from 'next/link';
// import { BsSearch } from 'react-icons/bs';
// import { FaFacebookF, FaTiktok } from 'react-icons/fa';
// import { AiOutlineInstagram } from 'react-icons/ai';
// import { IoIosCall } from 'react-icons/io';
// import Layout from '../../components/Layout';
// import { MenuItems } from '../../components';
// import client from '../../lib/client';
// import { urlFor } from '../lib/client';

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

//   const handleMenu = () => {
//     setMenuList(!menuList);
//   };

//   return (
//     <Layout>
//       <div>
//         <div className='bg-[#e89e30] w-full h-screen relative'>
//           <div>
//             <div className=' flex flex-col items-center gap-4 fixed xs:left-4 sm:left-4 md:left-8 lg:left-8 top-[40%] cursor-pointer'>
//               <div className='text-[#000]'>
//                 <FaFacebookF />
//               </div>
//               <div className='text-[#000]'>
//                 <FaTiktok />
//               </div>
//               <div className='text-[#000]'>
//                 <AiOutlineInstagram />
//               </div>
//               <div className='text-[#000]'>
//                 <IoIosCall />
//               </div>
//             </div>
//           </div>

//           <div className='ml-20 md:ml-20 xs:ml-12'>
//             <div className='bg-[#000] h-screen overflow-y-scroll overflow-x-hidden px-10 relative'>
//               {/* <div className='flex justify-between md:justify-around lg:justify-around sm:flex-col sm:items-center  xs:flex-col xs:items-center  '> */}
//               <div className='lg:mx-60'>
//                 <div className='mt-4 flex xs:flex-col xs:gap-3 items-center justify-between'>
//                   <div className='flex relative'>
//                     <input
//                       type='text'
//                       className='h-8 w-[100%] px-3'
//                       placeholder='Search Menu'
//                     />
//                     <BsSearch className='absolute right-0 bottom-2 mr-2 text-[#e89e30] font-bold' />
//                   </div>
//                   <div className='justify-end'>
//                     <button
//                       onClick={handleMenu}
//                       className={!menuList ? 'bg-[#51cf66]' : 'bg-[#e89e30]'}
//                     >
//                       {!menuList ? 'Vegan?' : 'Non-Vegan?'}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <div text-[#e89e30]>
//               <AiOutlineInstagram />
//               <IoIosCall />
//               <FaTiktok />
//               <FaFacebookF />
//             </div> */}
//               <div className='flex items-center justify-center md:justify-around lg:justify-around md:mr-20 xs:w-[100%]'>
//                 <div className='ml-20 sm:ml-6 xs:mx-2 mt-10'>
//                   <h2 className='text-[#e89e30] uppercase text-sm md:text-xl '>
//                     {`${!menuList ? '' : 'Vegan '}Appetizers and snacks`}
//                   </h2>
//                   <hr />
//                   <div className='mt-4'>
//                     {appetizerData?.map((item) => (
//                       <MenuItems key={item._id} item={item} />
//                     ))}
//                   </div>
//                   <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6 '>
//                     {`${!menuList ? '' : 'Vegan '}Maincourse Meal`}
//                   </h2>
//                   <hr />
//                   <div className='mt-4'>
//                     {!menuList
//                       ? maincourse?.map((item) => (
//                           <MenuItems key={item._id} item={item} />
//                         ))
//                       : veganMainData?.map((item) => (
//                           <MenuItems key={item._id} item={item} />
//                         ))}
//                   </div>
//                   <h2 className='text-[#e89e30] uppercase text-sm md:text-xl mt-6'>
//                     Drinks
//                   </h2>
//                   <hr />
//                   <div className='mt-4'>
//                     {drinksData?.map((item) => (
//                       <MenuItems key={item._id} item={item} />
//                     ))}
//                   </div>
//                 </div>

//                 {/* <div>
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
//                 {/* </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };
// const maincourseQuery = `*[_type == "maincourse"] {_id}`;
// const appetizerQuery = `*[_type == "appetizers"] {_id}`;
// const drinksQuery = `*[_type == "drinks"] {_id}`;
// const lagosQuery = `*[_type == "lagosSpecials"] {_id}`;
// const sideDishesQuery = `*[_type == "sideDishes"] {_id}`;
// const soupQuery = `*[_type == "soups"] {_id}`;
// const specialOrderQuery = `*[_type == "specialOrders"] {_id}`;
// const veganAppQuery = `*[_type == "veganAppetizers"] {_id}`;
// const veganMainQuery = `*[_type == "veganMaincourse"] {_id}`;

// export const getStaticPaths = async () => {
//   const maincourse = await client.fetch(maincourseQuery);

//   const appetizerData = await client.fetch(appetizerQuery);

//   const drinksData = await client.fetch(drinksQuery);

//   const lagosSpecialData = await client.fetch(lagosQuery);

//   const sideDishesData = await client.fetch(sideDishesQuery);

//   const soupData = await client.fetch(soupQuery);

//   const specialOrderData = await client.fetch(specialOrderQuery);

//   const veganAppData = await client.fetch(veganAppQuery);

//   const veganMainData = await client.fetch(veganMainQuery);

//   return {
//     paths: .map((val) => {
//       return {
//         params: {
//           id: val._id,
//         },
//       };
//     }),
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const maincourse = await client.fetch(maincourseQuery, { id: params.id });

//   const appetizerData = await client.fetch(appetizerQuery, { id: params.id });

//   const drinksData = await client.fetch(drinksQuery, { id: params.id });

//   const lagosSpecialData = await client.fetch(lagosQuery, { id: params.id });

//   const sideDishesData = await client.fetch(sideDishesQuery, { id: params.id });

//   const soupData = await client.fetch(soupQuery, { id: params.id });

//   const specialOrderData = await client.fetch(specialOrderQuery, {
//     id: params.id,
//   });

//   const veganAppData = await client.fetch(veganAppQuery, { id: params.id });

//   const veganMainData = await client.fetch(veganMainQuery, { id: params.id });

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
