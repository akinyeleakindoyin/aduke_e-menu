import React from 'react';
import Image from 'next/image';

const MenuImage = ({ img, title, price }) => {
  return (
    <div>
      <div className='relative'>
        <div>
          <Image src={img} width='150' height='150' />
        </div>
        <div className='absolute p-1 w-full bg-white bottom-0 z-10 mb-1 '>
          <p className='text-[#000] text-xs text-center'>{title}</p>
          <p className='text-[#000] text-xs text-center'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuImage;
