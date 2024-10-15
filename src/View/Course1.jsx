import React from 'react'
import {useState} from 'react';
import Navbar from '../Components/Navbar';
import { Select, Option } from "@material-tailwind/react";
import c1 from './../assets/images/Course-1/285664174_5800672579947739_3432022012771176406_n 3.png';
import c2 from './../assets/images/Course-1/award.png';
import c3 from './../assets/images/Course-1/book.png';
import c4 from './../assets/images/Course-1/calendar.png';
import c5 from './../assets/images/Course-1/dollar-circle.png';
import c6 from './../assets/images/Course-1/images 3.png';
import c7 from './../assets/images/Course-1/location.png';
import c8 from './../assets/images/Course-1/profile-circle.png';
import c9 from './../assets/images/Course-1/heart.png';
import c10 from './../assets/images/Course-1/WhatsApp Image 2024-06-08 at 08.07 (1).png';
import logo from './../assets/images/Web  1.png';
import logo2 from './../assets/images/profile-circle.png';
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { PiHeartBold } from "react-icons/pi";
import { VscListFlat } from "react-icons/vsc";
import { CiGrid41 } from "react-icons/ci";
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoOptionsOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import g22 from './../assets/images/LandingPage/Group 37 (1).png';
import g23 from './../assets/images/LandingPage/Social Icons (1).png';
import g24 from './../assets/images/LandingPage/Social Icons (2).png';
import g25 from './../assets/images/LandingPage/Social Icons (3).png';
import g26 from './../assets/images/LandingPage/Social Icons (4).png';
import g27 from './../assets/images/LandingPage/Social Icons (5).png';
import Pagination from '../Components/Pagination';
import { IoIosArrowDown } from "react-icons/io";

function Course1() {

  return (
    <>
    <div className='main'>
    {/*Navbar  */}
    <div className='mt-0 shadow-2xl w-full py-4 text-[#333]'>
        <div className='w-full flex flex-wrap items-center justify-between  px-10'>
          
          {/* Logo Section */}
          <div className='flex items-center'>
            <img className='h-12 w-12' src={logo} alt="logo" />
          </div>

          {/* Menu Items Section */}
          <div className='flex-1 flex flex-wrap justify-end items-center gap-6'>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Home</span>
            </div>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Undergraduate</span>
            </div>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Graduate</span>
            </div>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Short Courses</span>
            </div>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Hostels</span>
            </div>
            <div className='flex items-center sm:gap-2 gap-3'>
              <GoDotFill size={'12px'} color='#333' />
              <span>Internships-Jobs</span>
            </div>
      

          {/* Search, Sign In, and Profile Section */}
          <div className='flex items-center gap-6'>
            <div className="bg-[#2EC89C] border border-[#2EC89C] rounded-full p-1">
              <CiSearch color='#fff' size={'40px'} />
            </div>
            <span>Sign in</span>
            <img className='w-12 h-12' src={logo2} alt="profile" />
          </div>
</div>

        </div>

        {/* SEARCH */}
        <div className='px-12'>
            <div className='text-[64px] font-bold'>Search</div>
            <div className='text-[16px]'>Course and Information</div>
        </div>
    </div>

    {/* favourites */}
    <div className='bg-[#7AB1A2]  flex flex-row items-center justify-between py-4 px-12'>
    <div className="w-[40%]">
      <div className="relative w-full !min-w-[200px] h-[50px]">
        <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 left-3 -translate-y-2/4">
          <span className='mt-[-7px]'><CiSearch color='#fff' size={'30px'} /></span>
        </div>
        <input
          className="peer w-full h-full bg-[#6D978B] px-10 py-3  text-[#fff] font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder:text-[20px] placeholder:text-[#fff] placeholder:font-sans placeholder-[Nantes] rounded-full border-blue-gray-200 focus:border-gray-900"
          placeholder="   What are you looking for?"
          style={{ fontFamily: 'Nantes !important' ,color:'white !important'}}
        />
        <label className="hidden"></label>
      </div>
    </div>
    <div className='flex flex-row gap-2'>
     <span><PiHeartBold color='#fff' size='30px' /></span>
     <span className='text-[20px] text-[#fff]'> Favourites</span>
    </div>
    </div>

    {/* COURSES */}
    <div className='bg-[#1D8C6E] py-4 px-12'>
        <div className='text-[20px] flex flex-row justify-between'>
            <div className='flex flex-row gap-2'>
            <div className='text-[#00FFB6]'>Search all   </div>
            <div className='text-[#00FFB6]'>|</div> 
            <div className='text-[#fff]'>180 courses</div>
            </div>
            <div className='text-[20px] flex flex-row gap-4'>
                <div className='flex flex-row gap-2'>
                    <span><VscListFlat color='#fff' size={'25px'} /></span>
                    <span className='text-[#fff] '>List</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <span><CiGrid41 color='#00FFB6' size={'25px'} /></span>
                    <span className='text-[#00FFB6] '>Grid</span>
                </div>
                <div className='flex flex-row gap-2 '>
                    <span className='text-[#fff]'>Sort by :</span>
                    <span className='text-[#00FFB6] font-bold'>Best Matches</span>
                </div>
            </div>

        </div>
        <div className='text-[#00FFB6] border border-b-[#00FFB6] mt-4 mb-4 h-[1px] w-[full]'></div> 
        {/* SELECT */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        {/* Left Section - Dropdowns */}
        <div className="flex flex-wrap gap-4">
          {/* Filters */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row gap-3 items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <HiAdjustmentsHorizontal color="#fff" size="28px" />
              <span className="text-white">Filters</span>
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>

          {/* Course */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row justify-between items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <span className="text-white">Course</span>
              <IoIosArrowDown color="#fff" size="25px" />
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>

          {/* Session */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row justify-between items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <span className="text-white">Session</span>
              <IoIosArrowDown color="#fff" size="25px" />
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>

          {/* Country */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row justify-between items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <span className="text-white">Country</span>
              <IoIosArrowDown color="#fff" size="25px" />
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>

          {/* City */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row justify-between items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <span className="text-white">City</span>
              <IoIosArrowDown color="#fff" size="25px" />
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>

          {/* Institute */}
          <div className="w-full sm:w-48 md:w-32 relative">
            <div className="flex flex-row justify-between items-center absolute inset-0 px-4 py-2 pointer-events-none">
              <span className="text-white">Institute</span>
              <IoIosArrowDown color="#fff" size="25px" />
            </div>
            <select
              style={{ border: '3px solid #fff' }}
              className="w-full rounded-full bg-transparent text-white text-[16px] px-4 py-2 focus:outline-none focus:border-0 appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option className="text-[#333]">1</option>
              <option className="text-[#333]">2</option>
            </select>
          </div>
        </div>
        {/* Right Section - Clear Filters */}
        <div className="flex gap-3 items-center">
          <RiDeleteBin5Line color="#fff" size="28px" />
          <div className="text-white">Clear Filters</div>
        </div>
        </div>

        {/* pictures 1 */}
        <div className='mt-8 flex justify-center w-full'>
          <div className='flex flex-row sm:gap-3 xl:gap-6'>
          <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
        
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
                </div>
                <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
        
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
                </div>
                <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
  
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
                </div>
                <div className='rounded-[30px] bg-[#fff]'>
                {/* NURSING ADMISSIONS */}
                <div className='flex justify-center px-6'>
                  <img src={c10} alt="" />
                </div>
                {/* OPPORTUNITY */}
                <div className='mt-20 flex justify-center px-2'>
                  <div className='w-[21vw] flex-1 min-w-[100%] sm:min-w-[50%] lg:min-w-[auto]'>
                <div className='bg-black text-[#fff] py-8 px-4'>
                  <div style={{ fontFamily: 'Just Another Hand, cursive' }} className='text-[26px] sm:text-[12px] md:text-[35px] lg:text-[35px] font-bold'>
                    OPPORTUNITY
                  </div>
                  <div className=' text-[12px] sm:text-[10px] md:text-[16px] leading-relaxed'>
                    Want to start your own University
              
                    or Institute? Get expert advice and
                  
                    a detailed feasibility report.
                    
                    Let's make your vision a reality!
                  </div>
                </div>
                <div className='mt-2 sm:mt-4 md:mt-6 flex flex-row justify-center'>
                  <span className='text-[#333] text-[10px] sm:text-[12px] md:text-[14px]'>Advertisement.</span>
                  <span className='text-[#4FFFB0] text-[10px] sm:text-[12px] md:text-[14px] ml-1'>Why seeing ads?</span>
                </div>
                  </div>
                </div>
        
                </div>
                </div>

              </div>

        {/* pictures 2 */}
        <div className='mt-8 flex justify-center w-full'>
        <div className='flex flex-row sm:gap-3 xl:gap-6'>
        <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
  
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
                </div>
                <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
        
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
                </div>
                <div className='rounded-[30px] bg-[#fff]'>
        {/* IMAGES */}
        <div className="relative mb-8">
          <div>
            <img className="w-full h-auto" src={c1} alt="" />
            <div className="absolute top-2 right-2 z-20">
              <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
            </div>
          </div>
          {/* c6 Image positioned at the bottom, half inside and half outside */}
          <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
            <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
          </div>
        </div>
        
        {/* TEXT */}
        <div className='py-6 px-4 md:py-8 lg:py-10'>
          <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
          <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
          <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

          <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><img src={c2} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c3} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c7} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
              <div className='flex flex-row gap-2'>
                <div><GoClock color='#4B4B4B' size={'20px'} /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c4} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
              </div>
              <div className='flex flex-row gap-2'>
                <div><img src={c5} alt="" /></div>
                <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
              </div>
            </div>
          </div>
        </div>

        {/* APPLY NOW */}
        <div className='flex justify-center mb-10'>
          <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
              className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
            Apply Now
          </button>
        </div>

        {/* related courses */}
        <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
        </div>
          <div className='rounded-[30px] bg-[#fff]'>
  {/* IMAGES */}
  <div className="relative mb-8">
    <div>
      <img className="w-full h-auto" src={c1} alt="" />
      <div className="absolute top-2 right-2 z-20">
        <img className='xl:w-[30px] lg:w-[30px]' src={c9} alt="" />
      </div>
    </div>
    {/* c6 Image positioned at the bottom, half inside and half outside */}
    <div className="mt-4 absolute sm:left:3 md:left:4 xl:left-6 bottom-[-20%] w-full z-10">
      <img className="sm:w-[20%] md:w-[60px] lg:w-[70px] xl:w-[80px]" src={c6} alt="" />
    </div>
  </div>
  
  {/* TEXT */}
  <div className='py-6 px-4 md:py-8 lg:py-10'>
    <div className='text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BS in Fashion Designing</div>
    <div className='text-[14px] md:text-[15px] lg:text-[16px]'>Iqra University, Peshawar</div>
    <div className='text-[12px] md:text-[13px] lg:text-[14px] text-[#afafaf]'>Iqra University, Peshawar</div>

    <div className='flex flex-col md:flex-row gap-4 md:gap-6 py-4'>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-row gap-2'>
          <div><img src={c2} alt="" /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div><img src={c3} alt="" /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div><img src={c7} alt="" /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
        </div>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-row gap-2'>
          <div><GoClock color='#4B4B4B' size={'20px'} /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>BS in Fashion Art</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div><img src={c4} alt="" /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#4B4B4B]'>Full time 130 credit</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div><img src={c5} alt="" /></div>
          <div className='text-[10px] md:text-[11px] lg:text-[12px] text-[#afafaf]'>Iqra University</div>
        </div>
      </div>
    </div>
  </div>

  {/* APPLY NOW */}
  <div className='flex justify-center mb-10'>
    <button style={{border:'3px solid #1D8C6E', display:'flex', justifyItems:'center', alignItems:'center'}} 
         className='w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] p-8 md:p-9 lg:p-10 rounded-full bg-[#95b3aa] text-[14px] md:text-[15px] lg:text-[16px] text-[#fff] flex flex-col justify-center items-center'>
      Apply Now
    </button>
  </div>

  {/* related courses */}
  <div style={{borderBottomLeftRadius:'21px',borderBottomRightRadius:'21px'}} className='px-4 py-2 text-[16px] text-[#fff] bg-[#2EC89C]'>Related Courses ></div>
          </div>
          </div>

        </div>

        {/* PAGINAYION */}
        <div className='flex justify-center items-center py-3 mt-12'>
          <Pagination />
        </div>

    </div>

        {/* Footer */}
        <div className='bg-[#fff] px-0 py-12 relative'>
      {/* Container */}
      <div>
        {/* Image */}
        <div className='relative z-0'>
          <img className='w-full h-full ' src={g22} alt="" />
        </div>
        
        {/* Second div positioned on top */}
        <div className='second absolute inset-0 z-10 sm:pb-10 xl:pb-20 flex flex-row justify-around items-center'>
          <div className='flex flex-col sm:gap-2 xl:gap-4'>
            <div className='flex justify-center'>
              <button style={{border:'3px solid #fff'}} className='rounded-full text-[#fff] sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] sm:py-1 sm:px-4 py-2 px-6'>Contact Us</button>
            </div>
            <div className='flex flex-row lg:gap-6 md:gap-4 sm:gap-3 xl:gap-8 justify-center'>
              <div><img className='sm:w-[25px] xl:w-[100%]' width={'100%'} height={'100%'} src={g23} alt="" /></div>
              <div><img className='sm:w-[25px] xl:w-[100%]' src={g24} alt="" /></div>
              <div><img className='sm:w-[25px] xl:w-[100%]'  src={g25} alt="" /></div>
              <div><img className='sm:w-[25px] xl:w-[100%]' src={g26} alt="" /></div>
              <div><img className='sm:w-[25px] xl:w-[100%]' src={g27} alt="" /></div>
            </div>
          </div>

          <div className='flex flex-row gap-8 '>
            <div className='flex flex-col gap-2 sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] text-[#fff]'>
              <span>Select your Course</span>
              <span>Apply for Admission</span>
              <span>Become a Partner</span>
              <span>Join our team</span>
            </div>
            <div className='flex flex-col gap-2 sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[25px] text-[#fff]'>
              <span>Apply for Institutions</span>
              <span>About Us</span>
              <span>Privacy Policy</span>
              <span>Student Reviews</span>
            </div>
          </div>
        </div>
      </div>
        </div>


    </div>
    </>
  )
}

export default Course1