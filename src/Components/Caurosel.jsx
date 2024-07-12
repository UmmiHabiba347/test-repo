import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import C1 from './../assets/images/rgegdg (1).png';
import C2 from './../assets/images/rhrdgd (1).png';
import C4 from './../assets/images/dehjtfgdt (1).png';
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { IoMdArrowDropdown } from "react-icons/io";



const images = [C1, C2, C4 , C1, C2, C4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
// dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('1 and 2');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

  return (
  
    <div className="flex flex-col ">
      {/*   CAROUSEL  */}
      <div className="relative w-full max-w-full mx-auto overflow-hidden">
        <div className="relative sm:h-[250px] md:h-[330px] lg:h-[450px] flex">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {images.concat(images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`rounded-lg  flex-shrink-1 ${index % 3 === 2 ? 'w-[20%]' : 'w-[55%]'}`}
                style={{ margin: '-1vw',borderTopLeftRadius:'20px',borderTopRightRadius:'20px' }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* PAGINATION */}
 <div className='flex justify-between sm:px-4 md:px-4 md:flex-row sm:flex-col sm:gap-4  items-center px-4'>
      <div className="flex items-center gap-4 justify-start ">        
        <span
          className="bg-[#fff] shadow-2xl  p-2 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <IoArrowBack color='#2042B6' size={'30px'} />   
        </span>
        <span
          className="bg-[#fff] shadow-2xl  p-2 rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <IoArrowForwardOutline color='#2042B6' size={'30px'} />
        </span>
        <span className='flex items-center flex-row gap-4'>
            <span style={{fontFamily:'sans-serif'}} className='text-[20px]'>Pages</span>
            <span>
          
            {/* DROPDOWN  */}
            <div className="relative w-36">
        <button
            style={{
            fontSize: '20px',
            color: '#333',
            fontFamily: 'serif',
            textAlign: 'center',
            }}
            className="bg-[#fff] text-[#333] text-[14px] rounded-full py-3 w-full flex justify-between items-center focus:outline-none border-none px-4"
            onClick={toggleDropdown}
        >
            <span className="flex-1">{selectedOption}</span>
            <IoMdArrowDropdown className="ml-2" />
        </button>
        {isOpen && (
            <div className="absolute left-0 mt-2 w-full bg-[#fff] rounded-lg shadow-lg">
            <div
                className="py-2 text-center text-[14px] text-[#333] hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick('1 and 2')}
            >
                1 and 2
            </div>
            <div
                className="py-2 text-center text-[14px] text-[#333] hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick('3 and 4')}
            >
                3 and 4
            </div>
            </div>
        )}
            </div>
  
           
            </span>
            <span style={{fontFamily:'sans-serif'}} className='text-[20px]'>of 37</span>

        </span>
      </div>
      <div>
        <ButtonGroup className="rounded-full">
          <Button
            className="group rounded-full py-5 px-8 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]"
          >
            <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
              Download the 2023 Report
            </span>
          </Button>
        </ButtonGroup>
      </div>
 </div>

    </div>
  );
};

export default Carousel;
