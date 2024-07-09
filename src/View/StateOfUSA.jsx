import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import Pagination from './Pagination';

function StateOfUSA() {
  return (
    <>
    <div className='p-6'>
    <div className='px-16 leading-10 w-full px h-[100vh]'>
        {/* TEXT */}
        <div className=' leading-2'>
        <div><span style={{fontFamily:'Nantes'}} className='text-[48px] text-[#333] font-normal'>State Of USA</span></div>
        </div>
        {/* SELECT */}
        <div className=''>
        <div className="rounded-full w-28">
      <Select style={{fontSize:'38px',color:'#fff',fontFamily:'Nantes'}} className='bg-[#2042B6] text-[30px] !text-[#fff] rounded-full py-7 flex'
       placeholder={'2024'}  >
        <Option>2024</Option>
        <Option>2023</Option>
        <Option>2022</Option>
        <Option>2021</Option>
        <Option>2020</Option>
      </Select>
        </div>
        </div>

        <div className='mt-4 ' ><span className='text-[16px]'>Click through the slides or download the report to view natively on your device.</span></div>
        {/* PAGINATION */}
            <Pagination />

    </div>
    </div>
    </>
  )
}

export default StateOfUSA