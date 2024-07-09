import React from 'react'
import './PotentialFutureListing.css';
import strip from '../assets/images/Group 227.png';
import Klarna from '../assets/images/Group 417.png';
import PLaid from '../assets/images/crop1.png';
import Checkout from '../assets/images/crop2.png';
import Revoult from '../assets/images/crop3.png';
import chime from '../assets/images/Group 226.png';
import N26 from '../assets/images/Group 223.png';
import Brex from '../assets/images/Group 224.png';
import deel from '../assets/images/Group 225.png';
import gusto from '../assets/images/Group.png';




function PotentialFutureListing() {
  return (
    <>
    <div className='p-6'>
    <div className='w-full h-[100vh]'>
        {/* TEXT */}
        <div className='px-16 leading-2'>
        <div><span style={{fontFamily:'Nantes'}} className='text-[48px] text-[#333] font-normal'>Potential Future Listing</span></div>
        <span className='text-[16px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</span> 
        <div className='text-[16px]'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </div>
        </div>
        {/* CARDS */}
        <div className='flex flex-row gap-8 w-[100%] mt-8 px-16'>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={strip} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={Klarna} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={PLaid} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={Checkout} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={Revoult} alt="" />
            </div>
        </div>
        {/* CARDS 2 */}
        <div className='flex flex-row gap-8 w-[100%] mt-8 px-16'>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={chime} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={N26} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={Brex} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={deel} alt="" />
            </div>
            <div className='w-[20%] bg-[#fff] h-[200px] flex justify-center items-center'>
                <img src={gusto} alt="" />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PotentialFutureListing