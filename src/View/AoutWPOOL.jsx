import React from 'react'
import Maskimg from '../assets/images/Mask group.png';
import { ButtonGroup, Button } from "@material-tailwind/react";


function AoutWPOOL() {
  return (
    <>
    <div className='px-16 p-6 '>
        <div className=' w-full flex flex-row bg-[#fff] rounded-3xl'>
            
            <div className='w-[65%] pl-[8%] flex justify-center flex-col'>
            <div  style={{fontFamily:'serif',fontWeight:'500'}} className=' text-[55px] text-[#333] font-normal'>About WPPOOL</div>
            <div  style={{fontFamily:'serif'}} className=' text-[#999090] text-[38px] font-normal'>Investing in wppool for over 50 years</div>
            <div className='text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit.</div>
            <div className='text-[16px]'>jayhn yfghj dolor yot amet revreytery adipisicing elit. Magni, tempore voluptatum!</div>
            <div className='text-[16px]'>manrt ipsum tlorv fgh amet consectetur adipisicing elit. Maiores, cumque. Minima, </div>
            <div className='text-[16px]'>yoyet peygt, eutyo sit amet consectetur adipisicing elit. At?</div>
            {/* Button */}
            <div className='mt-6'>
                <ButtonGroup className="rounded-full">
                <Button className="group rounded-full py-4 px-8 shadow-lg border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]">
                <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[17px] font-normal text-white group-hover:text-[#2042B6]">
                 Contact WPPOOL
                </span>
                </Button>
                </ButtonGroup>
            </div>
            </div>
            <div className='w-[35%] '>
                <div className='h-full w-full object-cover flex items-end'><img className='' src={Maskimg} alt="" /></div>
            </div>
    
        </div>

        <div className=' mt-24 mb-16' style={{border:'2px solid #90B8F0'}}></div>

    </div>
    </>
  )
}

export default AoutWPOOL