import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import logo2 from './../assets/images/logo2.png'


function StickyNavbar() {
  return (
    <>
    <div className='p-6'>
    <div className='w-full h-[100vh] bg-[#EDEDED] relative mt-2'>
    {/* NAVBAR CONTENT */}
    <div className='py-4 flex justify-center '>
    <div className='w-[95%] border border-white shadow-lg rounded-[12px] bg-[#fff] px-4 py-2 text-[#333]'>
                        <div className='mx-auto flex justify-between'>
                        <div className='flex items-center'>
                         {/* logo image */}
                        <div><img  className=' w-100 h-100'  src={logo2} alt="logo" /></div>
                        </div>

                        <div>
                        <div className='flex justify-between gap-4'>

                        <div className='flex justify-between gap-3'>
                        <div>
                         <ButtonGroup  className="">
                         <Button type='outlined'  className="border border-grey bg-[#fff] rounded-full p-5 ">
                         <span className=""><IoShareSocial color='#333' size={'22px'} /></span>
                         </Button>
                         </ButtonGroup>
                         </div>

                         <div>
                         <ButtonGroup className="py-1">
                         <Button type='outlined' className="rounded-full py-5 border border-grey text-[#333] px-8 bg-[#fff]">  Download the 2024 Report</Button>
                         </ButtonGroup>
                         </div>
                                        

                        </div>

                        <div className="flex items-center"><GrMenu color='#333' size={"50px"} className="mr-2" /> </div>
                            


                            </div>
                            </div>



                        </div>
    </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default StickyNavbar;