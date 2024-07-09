import React from 'react'
import zimg1 from '../assets/images/image 97.png';
import zimg2 from '../assets/images/image 98.png';
import zimg3 from '../assets/images/Group 357.png';
import { ButtonGroup, Button } from "@material-tailwind/react";




function StoriesAndideas() {
  return (
    <>
    <div className='p-6'>
      <div className='px-16 w-full '>
          {/* TEXT */}
        <div><span  style={{fontFamily:'Nantes'}} className='text-[48px] text-[#333] font-normal'>Stories And Ideas</span></div>
        <div className='text-[16px] font-normal'>The latest news and updates </div>

        <div className='flex flex-col gap-4'>  
            {/* CARDS ROW1 */}
            <div className='w-[100%] flex flex-row mt-16 gap-6'>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg1} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By, Shahabuddin Sagor</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg2} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By, Naem Khan</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg3} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By; Shagor Shahabuddin</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
            {/* CARDS ROW2 */}
            <div className='w-[100%] flex flex-row mt-16 gap-6'>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg1} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By, Shahabuddin Sagor</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg2} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By, Naem Khan</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className='relative w-[33.333%] bg-[#fff] py-4 rounded-[10px] overflow-visible'>
                <div className='flex ml-4 w-full'>
                  <img className='z-8 transform -translate-y-[45%]' src={zimg3} alt="" />
                </div>
                <div className='z-2 transform -translate-y-[25%] ml-6' >
                  <div className='text-[#3DA5F4]'>By; Shagor Shahabuddin</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                  <div>Lorem ipsum dolor sit amet.</div>
                  {/* Button */}
                  <div className='mt-4'>
                  <ButtonGroup className="rounded-full">
                  <Button className="group rounded-full py-3 px-5 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                  <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
                    Read More
                  </span>
                  </Button>
                  </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
        </div>  

        <div className=' mt-28 mb-10' style={{border:'2px solid #90B8F0'}}></div>

      </div>
    </div>
    </>
  )
}

export default StoriesAndideas