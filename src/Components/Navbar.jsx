import React from 'react';
import { GrMenu } from "react-icons/gr";
import logo from './../assets/images/Web  1.png';
import logo2 from './../assets/images/profile-circle.png';
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className='mt-0 shadow-2xl w-full bg-[#E2E2E2] text-[#333]'>
        <div className='w-full flex flex-wrap items-center justify-between py-3 px-10'>
          
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
      </div>
    </>
  );
}

export default Navbar;
