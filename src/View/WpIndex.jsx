import { React, useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import logo2 from './../assets/images/logo2.png';
import union from './../assets/images/Union (1).png';
import Linegraph from '../Components/Linegraph';
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSquareFill } from "react-icons/pi";

function WpIndex() {
  // dropdown states
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isIpoOpen, setIsIpoOpen] = useState(false);

  const toggleSectorDropdown = () => {
    setIsSectorOpen(!isSectorOpen);
  };

  const toggleIpoDropdown = () => {
    setIsIpoOpen(!isIpoOpen);
  };

  return (
    <>
      <div className='w-full h-full mb-20 bg-[#fff] relative mt-2'>
        {/* NAVBAR CONTENT */}
        <div className='py-4 p-6'>
          <div className='shadow-md rounded-[12px] bg-[#EDEDED] px-4 py-2 text-[#333]'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
              <div className='flex items-center'>
                {/* Logo image */}
                <img className='' src={logo2} alt="logo" />
              </div>

              <div className='flex items-center gap-1 mt-4 sm:mt-0'>
                <ButtonGroup>
                  <Button
                    type='outlined'
                    className="border border-[#636363] bg-[#EDEDED] rounded-full p-2 sm:p-5 w-8 h-8 sm:w-auto sm:h-auto"
                  >
                    <IoShareSocial color='#333' size={'16px'} className="sm:hidden" />
                    <IoShareSocial color='#333' size={'22px'} className="hidden sm:block" />
                  </Button>
                </ButtonGroup>

                <ButtonGroup>
                  <Button
                    type='outlined'
                    className="rounded-full sm:py-5 sm:px-8 py-5 px-8 text-[10px] border border-[#636363] text-[#333] bg-[#EDEDED]"
                  >
                    Download the 2024 Report
                  </Button>
                </ButtonGroup>

                <GrMenu color='#333' size={"30px"} className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row p-6 gap-6">
          {/* LIST */}
          <div className='w-full lg:w-[20%] h-[80vh] py-2 px-3 bg-[#EFF3F6] rounded-[10px]'>
            <ul className='divide-y divide-gray-300'>
              {['The index', 'The index Tab Two', 'The index Tab Three', 'The index Tab Four', 'The index Tab Five'].map((item, index) => (
                <li key={index} className='my-2'>
                  <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-white hover:rounded-[10px]'>
                    <span className='text-[14px] md:text-[17px] lg:text-[20px]'>{item}</span>
                    <span className='text-[14px] md:text-[17px] lg:text-[20px]'>
                      <span className='group-hover:hidden'>+</span>
                      <span className='hidden group-hover:inline'>-</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* THE WPPOOL INDEX */}
          <div className='w-full lg:w-[80%] px-6'>
            <div className='flex flex-col md:flex-row items-center gap-2'>
              <img src={union} alt="" className="w-16 h-16" />
              <div className='text-[30px] md:text-[40px]'> THE WPPOOL INDEX</div>
            </div>

            <div className='mt-4'>
              <div className='flex flex-col md:flex-row gap-4'>
                {[
                  { color: '#FC714D', label: 'WPPOOL', value: '+66.2%' },
                  { color: '#615DE3', label: 'Google', value: '+66.2%' },
                  { color: '#7CA63A', label: 'Microsoft', value: '+66.2%' },
                  { color: '#6F34A1', label: 'Twitter', value: '+66.2%' },
                ].map((item, index) => (
                  <div key={index} className='w-full md:w-[25%] px-1 bg-[#F3F3F3] rounded-[10px]'>
                    <div className='p-2 flex justify-between'>
                      <div className='text-[20px] md:text-[35px]' style={{ color: item.color }}>{item.value}</div>
                      <div className='flex flex-row gap-2 items-center'>
                        <div className='flex flex-col text-sm md:text-base'>
                          <span>{item.label}</span>
                          {item.label !== 'Microsoft' && <span>index</span>}
                        </div>
                        <div className='border-r-4 h-full' style={{ borderRightColor: item.color }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* selectors */}
            <div className='flex flex-col md:flex-row items-center justify-between mt-4 gap-4'>
              <div className='flex flex-col sm:flex-row gap-2'>
                <div className="relative">
                  <button
                    style={{
                      fontSize: '20px',
                      color: '#fff',
                      fontFamily: 'serif',
                      textAlign: 'center',
                    }}
                    className="bg-[#2042B6] text-[#fff] text-[14px] rounded-full py-2 px-6 flex justify-between items-center focus:outline-none border-none"
                    onClick={toggleSectorDropdown}
                  >
                    <span style={{ fontFamily: 'Poppins' }} className="flex-1">Sectors</span>
                    <IoMdArrowDropdown className="ml-2" />
                  </button>
                  {isSectorOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-[#fff] rounded-lg shadow-lg">
                      {/* No options */}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    style={{
                      fontSize: '20px',
                      color: '#fff',
                      fontFamily: 'serif',
                      textAlign: 'center',
                    }}
                    className="bg-[#2042B6] text-[#fff] text-[14px] rounded-full py-2 px-6 flex justify-between items-center focus:outline-none border-none"
                    onClick={toggleIpoDropdown}
                  >
                    <span style={{ fontFamily: 'Poppins' }} className="flex-1">Types of IPO</span>
                    <IoMdArrowDropdown className="ml-2" />
                  </button>
                  {isIpoOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-[#fff] rounded-lg shadow-lg">
                      {/* No options */}
                    </div>
                  )}
                </div>
              </div>
              <div className='flex flex-row gap-2 sm:gap-4 items-center py-2 px-12 sm:px-6 bg-[#EFF3F6] text-[#748DA1] rounded-full'>
  {['1Y', 'YTD', '6M', '1M', '1W'].map((item, index) => (
    <span
      key={index}
      className='hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-full px-2 py-1'
    >
      {item}
    </span>
  ))}
              </div>

            </div>
{/* graph */}
<div className='relative mt-4'>
<div style={{borderLeft:'2px solid'}} className='h-[500px] absolute top-0 right-[10%] sm:right-[30%]  md:right-[45%] lg:right-[46%] xl:right-[48%]  z-20'></div>
  <div className=' absolute top-12 right-[10%] sm:right-[20%] md:right-[25%] lg:right-[40%] xl:right-[40%]  z-20 flex flex-row bg-[#fff]'>
    <div className='px-2 sm:px-3 py-2 sm:py-3 border border-[#333] flex flex-col rounded-xl text-[14px] sm:text-[16px] md:text-[18px]'>
      <div className='font-bold'>May 5, 2022</div>
      <div className='flex gap-1 sm:gap-2'>
        <span><PiSquareFill color='red' /></span>
        <span>WPPOOL: 1556.9%</span>
      </div>
      <div className='flex gap-1 sm:gap-2'>
        <span><PiSquareFill color='#3DA5F4' /></span>
        <span>Google: 877.7%</span>
      </div>
      <div className='flex gap-1 sm:gap-2'>
        <span><PiSquareFill color='#abc32f' /></span>
        <span>Microsoft: 193.3%</span>
      </div>
      <div className='flex gap-1 sm:gap-2'>
        <span><PiSquareFill color='purple' /></span>
        <span>Twitter Index: 90.2%</span>
      </div>
    </div>
  </div>
  <div className='relative border border-[#333] rounded-lg h-[100%] w-full z-10'>
    <Linegraph />
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
}

export default WpIndex;
