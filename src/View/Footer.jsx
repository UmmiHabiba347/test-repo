import React from 'react';
import { FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-auto mt-16 w-full'>
      <div className='rounded-r-xl  mr-16 h-full bg-[#E6E6E6] p-4 md:p-8 lg:p-16'>
        <div className='flex flex-col md:flex-row p-4 lg:px-14 w-full gap-8'>
          <div className='w-full md:w-[60%] px-4 lg:px-10 flex flex-col gap-8 md:gap-60'>
            <div style={{ fontFamily: 'Nantes' }} className='font-normal text-[24px] md:text-[36px] lg:text-[48px]'>
              Experience remarkable WordPress
              products with a new level of power,
              beauty and human-centered designs.
            </div>
            <div>
              <div className='font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-[#CCCCCC]'>@2024 Terms of Use Privacy Policy</div>
              <div className='text-[12px] md:text-[14px] lg:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                est amet aperiam qui, veniam ea nobis sit repellat
                explicabo dicta enim. Quisquam consequuntur eos ipsa maxime illo.
                Cupiditate, possimus placeat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus nisi voluptatem dicta cum totam minus
                ea dolor quam quas! Minima, fugiat in! Eligendi dolorum, maiores incidunt
                recusandae quam ipsum dolor ad vero dignissimos praesentium nostrum fuga
                repudiandae eaque rem cumque.
              </div>
            </div>
          </div>

          <div className='w-full md:w-[20%] px-4 lg:px-10'>
            <div className='text-[18px] md:text-[20px] font-semibold text-[#9B9B9B]'>Jump to</div>
            <div className='text-[18px] md:text-[20px] text-[#2042B6]'>
              <ul style={{ fontFamily: 'sans-serif', fontWeight: '500' }} className='flex flex-col gap-3 mt-2'>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>News</li>
                <li>Stories</li>
                <li>Jobs</li>
              </ul>
            </div>
          </div>

          <div className='w-full md:w-[30%] px-4 lg:px-10 text-[14px] md:text-[16px] lg:text-[20px]'>
            <div className='flex flex-col gap-6'>
              <div>
                <div className='font-bold'>Cambridge</div>
                <div className='font-normal'>70728 Yost Burg,</div>
                <div className='font-normal'>North Magdaleneview,</div>
                <div className='font-normal'>UT 97952-2814,</div>
              </div>
              <div style={{ border: '2px solid #CCCCCC' }} className='w-full'></div>
              <div>
                <div className='font-bold'>Cambridge</div>
                <div className='font-normal'>70728 Yost Burg,</div>
                <div className='font-normal'>North Magdaleneview,</div>
                <div className='font-normal'>UT 97952-2814,</div>
              </div>
              <div style={{ border: '2px solid #CCCCCC' }} className='w-full'></div>
              <div>
                <div className='font-bold'>Cambridge</div>
                <div className='font-normal'>70728 Yost Burg,</div>
                <div className='font-normal'>North Magdaleneview,</div>
                <div className='font-normal'>UT 97952-2814,</div>
              </div>
              <div style={{ border: '2px solid #CCCCCC' }} className='w-full'></div>
              <div className='flex gap-6'>
                <div><FaLinkedin size='30px' color='#9B9B9B' /></div>
                <div><FaTwitter size='30px' color='#9B9B9B' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
