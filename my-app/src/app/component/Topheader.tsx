import React from 'react';
import Image from 'next/image';

export const Topheader = () => {
  return (
    <div className='bg-white text-black flex flex-col sm:flex-row items-center justify-between w-full p-4 sm:p-8 shadow-md'>
      {/* Logo and Heading */}
      <div className='flex items-center justify-center sm:space-x-4'>
        <Image
          src="/Logo.png"
          alt="logo"
          width={30} // Adjust width as needed
          height={30} // Adjust height as needed
        />
        <h1 className='font-extrabold text-xl sm:text-2xl ml-4 text-center sm:text-left'>
          High Fidelity Dashboard - Home Rent
        </h1>
      </div>

      {/* Last Update */}
      <div className='w-full sm:w-[236px] h-[25px] text-center sm:text-right mt-4 sm:mt-0'>
        <p className='text-sm sm:text-base'>
          Last Update: <span className='font-bold'>8 Aug 2022</span>
        </p>
      </div>
    </div>
  );
};
