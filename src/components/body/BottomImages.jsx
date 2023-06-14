import React from 'react';

function BottomImages() {
  return (
    <div className='flex flex-col justify-between items-center px-4 md:flex-row md:justify-between md:items-center md:px-20  pb-14 mt-[170vh] md:mt-[10vh] lg:mt-24 '>
      <img className='mb-4 w-16 h-16' src="/images/about_logo_1.png" alt="about1" />
      <img className='mb-4 w-16 h-16' src="/images/about_logo_2.png" alt="about2" />
      <img className='mb-4 w-16 h-16' src="/images/about_logo_3.png" alt="about3" />
      <img className='mb-4 w-16 h-16' src="/images/about_logo_5.png" alt="about5" />
      <img className='w-16 h-16' src="/images/about_logo_4.png" alt="about4" />
    </div>
  );
}

export default BottomImages;
