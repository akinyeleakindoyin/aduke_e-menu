import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const MenuItems = ({ name, price, details, category }) => {
  return (
    <div>
      <ul className=''>
        <li className='flex justify-between'>
          <div className='flex justify-between items-center'>
            <div className='justify-start'>
              <div className='flex gap-2 mb-4 md:mb-3 lg:mb-4'>
                <div className='flex flex-col xs:text-[13px] lg:text-xl md:text-sm xs:w-[100%]'>
                  <p>{name}</p>
                  <div className='w-[70%] md:w-[100%]'>
                    <p className='text-[9px] md:text-[10px] lg:text-[10px] italic text-[#fff]/50 leading-3'>
                      {details}
                    </p>
                  </div>
                  <div className='w-[70%]'>
                    <p className='text-[9px] md:text-[8px] lg:text-[9px]  text-[#e89e30]/90 leading-3'>
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-end'>
            <p className='xs:text-[10px]'>${price.toFixed(2)}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
