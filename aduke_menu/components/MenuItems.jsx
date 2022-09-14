import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const MenuItems = ({
  name,
  price,
  image,
  details,
  category,
  available,
  slug,
}) => {
  return (
    <div>
      <ul className=''>
        <li className='flex justify-between'>
          {/* <Link href={`/item/${item._id}`}> */}
          <div className='flex justify-between items-center'>
            <div className='justify-start'>
              {/* <div className='flex gap-2 lg:gap-4'> *
              {/* <div className='xs:w-[100%] sm:w-[20%]'>
                  <div className='hover:scale-105 ease-in duration-300 '>
                    <Image
                      src={urlFor(image)}
                      width='70'
                      height='70'
                      className='rounded-full'
                    />
                  </div>
                </div> */}
              <div className='flex gap-2 mb-4 md:mb-3 lg:mb-4'>
                <div className='flex flex-col xs:text-[13px] lg:text-xl md:text-sm xs:w-[100%]'>
                  <p>{name}</p>
                  <div className='w-[70%]'>
                    <p className='text-[9px] md:text-[10px]  italic text-[#fff]/50 leading-3'>
                      {details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-end'>
            <p className='xs:text-[10px]'>${price.toFixed(2)}</p>
          </div>
          {/* </div> */}
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
