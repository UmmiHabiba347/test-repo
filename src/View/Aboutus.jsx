import React from 'react';
import Navbar from '../Components/Navbar';
import a1 from './../assets/images/AboutUs/Something caught their attention.png';
import a2 from './../assets/images/AboutUs/Technology.png';
import tech1 from './../assets/images/AboutUs/Technology (1).png';
import a3 from './../assets/images/AboutUs/Beautiful view of a green lawn with trees.png';
import bgimg from './../assets/images/AboutUs/Group 38.png'; // Background image
import a5 from './../assets/images/AboutUs/Brick building (1).png';
import a7 from './../assets/images/AboutUs/Female hands holding a smartphone.png';
import a8 from './../assets/images/AboutUs/Teamwork.png';
import a9 from './../assets/images/AboutUs/Coffee break between meetings.png';
import a10 from './../assets/images/AboutUs/Is it just me.png';
import a11 from './../assets/images/AboutUs/Technology (2).png';
import a12 from './../assets/images/AboutUs/All these materials will come in handy in your job (1).png';
import a13 from './../assets/images/AboutUs/Woman in formal wear holding documents.png';
import a14 from './../assets/images/AboutUs/Art.png';
import a15 from './../assets/images/AboutUs/aaxa.png';
import a16 from './../assets/images/AboutUs/adas.png';
import a17 from './../assets/images/AboutUs/asas.png';
import nature from './../assets/images/AboutUs/Nature.png';
import g21 from './../assets/images/LandingPage/WhatsApp (1).png';
import g22 from './../assets/images/LandingPage/Group 37 (1).png';
import g23 from './../assets/images/LandingPage/Social Icons (1).png';
import g24 from './../assets/images/LandingPage/Social Icons (2).png';
import g25 from './../assets/images/LandingPage/Social Icons (3).png';
import g26 from './../assets/images/LandingPage/Social Icons (4).png';
import g27 from './../assets/images/LandingPage/Social Icons (5).png';
import { GrFormNext } from "react-icons/gr";


function Aboutus() {
  return (
    <>
      <div className=''>
        {/* Navbar */}
        <div><Navbar /></div>

        {/* CONTENT */}
        <div className=''>
          {/* Nature image section */}
          <div className='relative'>
            <img className='w-full h-auto' src={nature} alt="" />
          </div>

          {/* Container second div */}
          <div className='relative w-full z-10 mt-[-15%] md:mt-[-8%] lg:mt-[-10%]'>
            <div className='relative'>
              {/* Background Image */}
              <div>
                <img className='w-full h-auto' src={bgimg} alt="" />
              </div>

              {/* Second div positioned on top of the background image */}
              <div className='second absolute top-[15%] left-0 w-full z-10'>
                <div className='flex flex-col md:flex-row gap-6 px-4 sm:px-6 md:px-12'>
                  {/* Left Column */}
                  <div className='w-full md:w-[50vw] flex flex-col gap-10 '>
                    <div>
                      <img className='w-full h-auto' src={a1} alt="" />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                      <div><img className='w-full h-auto' src={tech1} alt="" /></div>
                      <div><img className='w-full h-auto' src={a7} alt="" /></div>
                    </div>
                    <div className=''>
                      <img className='w-full h-auto' src={a8} alt="" />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                      <div><img className='w-full h-auto' src={a13} alt="" /></div>
                      <div><img className='w-full h-auto' src={a14} alt="" /></div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className='w-full md:w-[50vw] flex flex-col gap-10 '>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                      <div><img className='w-full h-auto' src={a2} alt="" /></div>
                      <div><img className='w-full h-auto' src={a3} alt="" /></div>
                    </div>
                    <div>
                      <img className='w-full h-auto' src={a5} alt="" />
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                      <div><img className='w-full h-auto' src={a9} alt="" /></div>
                      <div><img className='w-full h-auto' src={a10} alt="" /></div>
                    </div>
                    <div className=''>
                      <img className='w-full h-auto' src={a11} alt="" />
                    </div>
                    <div  className=''>
                      <img className=' h-auto' src={a12} alt="" />
                    </div>
                  </div>
                </div>

              {/* News and Conferences */}
              <div className='bg-[#CCCBCB] mt-4 px-4 sm:px-6 md:px-12'>
              {/* N&C Section */}
              <div className='flex flex-col lg:flex-row'>
                {/* News Section */}
                <div className='w-full lg:w-[50%] px-4 py-6 flex flex-col gap-6'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='font-bold text-[20px] sm:text-[25px] md:text-[30px]'>News</div>
                    <div className='text-[12px] sm:text-[14px] flex gap-1'>
                      <span>See all</span>
                      <span>
                        <GrFormNext size='20px' color='#333' />
                      </span>
                    </div>
                  </div>
                  <div className='border-b-2 border-[#555555] w-full'></div>
                  {/* News Items */}
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <div key={index}>
                        <div className='text-[14px] sm:text-[15px]'>
                          Record acceptances for UK 18-year-olds as international growth flattens out
                        </div>
                        <div className='text-[#9B9B9B] text-[12px] sm:text-[13px]'>19-Sep-2024</div>
                        <div className='border-b-2 border-[#9B9B9B] w-full'></div>
                      </div>
                    ))}
                </div>

                {/* Conferences and References Section */}
                <div className='w-full lg:w-[50%] px-4 py-6 flex flex-col gap-6'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='font-bold text-[20px] sm:text-[25px] md:text-[30px]'>Conferences and References</div>
                    <div className='text-[12px] sm:text-[14px] flex gap-1'>
                      <span>See all</span>
                      <span>
                        <GrFormNext size='20px' color='#333' />
                      </span>
                    </div>
                  </div>
                  <div className='border-b-2 border-[#555555] w-full'></div>
                  {/* Conference Items */}
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <div key={index}>
                        <div className='text-[14px] sm:text-[15px]'>
                          Create Your Future London 2024: The Creative Career showcase
                        </div>
                        <div className='text-[#9B9B9B] text-[12px] sm:text-[13px]'>7 – 8 October 2024</div>
                        <div className='border-b-2 border-[#9B9B9B] w-full'></div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Articles */}
              <div className='py-4'>
                <div className='text-[25px] sm:text-[30px] font-bold'>Sponsored articles</div>
                <div className='text-[#2EC89C] text-[13px] sm:text-[15px] font-normal'>USC Media Service</div>
              </div>

              {/* Articles Container */}
              <div className='py-4 px-4 sm:px-6 md:px-12'>
                {/* Responsive Grid for Articles */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  
                  {/* Article 1 */}
                  <div className='flex gap-4 items-start'>
                    <img className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]' src={a17} alt="" />
                    <div className='flex flex-col gap-1'>
                      <span className='font-bold text-[13px] sm:text-[15px]'>Find your perfect NHS course today</span>
                      <span className='font-bold text-[10px] sm:text-[12px] text-[#9B9B9B]'>Sponsored by NHS</span>
                    </div>
                  </div>
                  
                  {/* Article 2 */}
                  <div className='flex gap-4 items-start'>
                    <img className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]' src={a16} alt="" />
                    <div className='flex flex-col gap-1'>
                      <span className='font-bold text-[13px] sm:text-[15px]'>How to prepare for your conservatoire audition</span>
                      <span className='font-bold text-[10px] sm:text-[12px] text-[#9B9B9B]'>USC article</span>
                    </div>
                  </div>

                  {/* Article 3 */}
                  <div className='flex gap-4 items-start'>
                    <img className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]' src={a15} alt="" />
                    <div className='flex flex-col gap-1'>
                      <span className='font-bold text-[13px] sm:text-[15px]'>Student finance for postgraduate loans</span>
                      <span className='font-bold text-[10px] sm:text-[12px] text-[#9B9B9B]'>USC article</span>
                    </div>
                  </div>

                </div>
              </div>



              </div>

              {/* Footer */}
              <div className='bg-[#fff] py-12 relative'>
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


            </div>
          </div>  



        </div>



      </div>
    </>
  );
}

export default Aboutus;
