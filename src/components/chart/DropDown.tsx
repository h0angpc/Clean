import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div>
        <button className="w-[104px] h-[38px] bg-[#fcfcfc] rounded-lg border border-neutral-300 flex items-center justify-between px-4 hover:bg-gray-400 duration-300" onClick={toggleDropdown}>
            <div className='text-[#2b3034] text-[13px] font-black leading-[10px] font-gilroy-regular'>
            Filter By
            </div>
            <Image src='/images/Chart/drop_down.svg' alt='drop_down' width={10} height={10}/>
        </button>
        {isOpen && <div className="fixed inset-0" onClick={toggleDropdown}></div>}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-400 duration-300 w-full text-left">
              Descending
            </button>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-400 duration-300 w-full text-left">
              Ascending
            </button>
            <button className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-400 duration-300 w-full text-left">
              None
            </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
