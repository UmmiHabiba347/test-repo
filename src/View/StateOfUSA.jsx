import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Select, Option } from "@material-tailwind/react";
import Pagination from './Pagination';
import Carousel from '../Components/Caurosel';
import { IoShareSocial } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import logo2 from './../assets/images/logo2.png'
import C3 from './../assets/images/Group 364 (2).png';



function StateOfUSA() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('2024');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className='p-6 mt-8 mb-28'>
        <div className='px-16 leading-10 w-full px h-[100vh]'>
          {/* NAVBAR CONTENT */}
          <div className='py-4  '>
            <div className='shadow-md rounded-[12px] bg-[#EDEDED] px-4 py-2 sm:py-4 text-[#333]'>
              <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className='flex items-center'>
                  {/* Logo image */}
                  <img className='' src={logo2} alt="logo" />
                </div>

                <div className='flex items-center gap-1 mt-4  sm:mt-0'>
                  <ButtonGroup>
                    <Button
                      type='outlined'
                      className="border border-[#636363] bg-[#EDEDED] rounded-full p-2 sm:p-4 w-8 h-8 sm:w-auto sm:h-auto"
                    >
                      <IoShareSocial color='#333' size={'16px'} className="sm:hidden" />
                      <IoShareSocial color='#333' size={'22px'} className="hidden sm:block" />
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button
                      type='outlined'
                      className="rounded-full py-2 sm:py-5 px-4 sm:px-8 border border-[#636363] text-[#333]  bg-[#EDEDED]"
                    >
                      Download the 2024 Report
                    </Button>
                  </ButtonGroup>

                  <GrMenu color='#333' size={"30px"} className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className=' leading-10'>
            <div style={{ fontFamily: 'Nantes' }} className='mt-4 text-[48px] text-[#333] font-normal'>State Of USA</div>
          </div>
          {/* DROPDOWN  */}
          <div className="relative  w-44 mt-4">
            <button
              style={{
                fontSize: '36px',
                color: '#fff',
                fontFamily: 'serif',
                textAlign: 'center',
              }}
              className="bg-[#2042B6] text-[#fff] text-[36px] rounded-full py-3 w-full flex justify-between items-center focus:outline-none border-none px-4"
              onClick={toggleDropdown}
            >
              <span className="flex-1 text-center">{selectedOption}</span>
              <IoMdArrowDropdown color='#fff' className="ml-2" />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-[#2042B6] rounded-lg shadow-lg">
                <div
                  className="py-2 text-center text-[36px] text-[#fff] hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick('2024')}
                >
                  2024
                </div>
                <div
                  className="py-2 text-center text-[36px] text-[#fff] hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick('2023')}
                >
                  2023
                </div>
                <div
                  className="py-2 text-center text-[36px] text-[#fff] hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick('2022')}
                >
                  2022
                </div>
                <div
                  className="py-2 text-center text-[14px] text-[#fff] hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick('2021')}
                >
                  2021
                </div>
                <div
                  className="py-2 text-center text-[14px] text-[#fff] hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick('2020')}
                >
                  2020
                </div>
              </div>
            )}
          </div>

          <div className='mt-4 text-[16px] lg:ml-2'>
            Click through the slides or download the report to view natively on your device.
          </div>
          {/* PAGINATION AND CAROUSEL */}
          <div className='relative'>
        <div className='flex justify-end px-28'>
          <img src={C3} alt="" className='relative z-0' />
        </div>
        <div className='absolute top-0 w-[100%] mt-24 z-10'>
          <Carousel />
        </div>
      </div>


        </div>
      </div>
    </>
  );
}

export default StateOfUSA;
