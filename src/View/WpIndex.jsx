import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import logo2 from './../assets/images/logo2.png'
import union from './../assets/images/Union (1).png'



function WpIndex() {
  return (
    <>
    <div className='p-6'>
    <div className='w-full h-[100vh] bg-[#fff] relative mt-2'>
    {/* NAVBAR CONTENT */}
    <div className='py-4 p-6'>
    <div className=' shadow-md rounded-[12px] bg-[#EDEDED] px-4 py-2 text-[#333]'>
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
                         <Button type='outlined'  className="border border-[#636363] bg-[#EDEDED] rounded-full p-5 ">
                         <span className=""><IoShareSocial color='#333' size={'22px'} /></span>
                         </Button>
                         </ButtonGroup>
                         </div>

                         <div>
                         <ButtonGroup className="py-1">
                         <Button type='outlined' className="rounded-full py-5 border border-[#636363] text-[#333] px-8 bg-[#EDEDED]">  Download the 2024 Report</Button>
                         </ButtonGroup>
                         </div>
                                        

                        </div>

                        <div className="flex items-center"><GrMenu color='#333' size={"50px"} className="mr-2" /> </div>
                            


                            </div>
                            </div>



                        </div>
    </div>
    </div>



    <div className="flex flex-row p-6 ">
    {/* LIST */}
    <div className='w-[20%] h-[80vh] py-2 px-3 bg-[#EFF3F6] rounded-[10px]'>
    <ul>
        <li>
            <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-[10px]'>
                <span className='text-[25px]'>The index</span>
                <span className='text-[25px]'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:inline'>-</span>
                </span>
            </div>
        </li>
    </ul>
    <ul className='mt-2'>
        <li>
            <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-[10px]'>
                <span className='text-[25px]'>The index Tab Two</span>
                <span className='text-[25px]'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:inline'>-</span>
                </span>
            </div>
        </li>
    </ul>
    <ul className='mt-2'>
        <li>
            <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-[10px]'>
                <span className='text-[25px]'>The index Tab Three</span>
                <span className='text-[25px]'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:inline'>-</span>
                </span>
            </div>
        </li>
    </ul>
    <ul className='mt-2'>
        <li>
            <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-[10px]'>
                <span className='text-[25px]'>The index Tab Four</span>
                <span className='text-[25px]'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:inline'>-</span>
                </span>
            </div>
        </li>
    </ul>
    <ul className='mt-2'>
        <li>
            <div className='group flex justify-between py-2 px-4 rounded-[10px] hover:bg-[#2042B6] hover:text-[#fff] hover:rounded-[10px]'>
                <span className='text-[25px]'>The index Tab Five</span>
                <span className='text-[25px]'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:inline'>-</span>
                </span>
            </div>
        </li>
    </ul>
    </div>
    {/*THE  WPPOOL INDEX  */}
    <div className='w-[80%] px-6'>
        <div className='flex flex-row items-center gap-2'>
        <div><img src={union} alt="" /></div>
        <div className='text-[40px]'> THE WPPOOL INDEX</div>
        </div>
        <div className=''>
            <div className='flex flex-row gap-4'>
            <div className='w-[25%] px-1 bg-[#F3F3F3] rounded-[10px] '>
                <div className='p-2 flex justify-between'>
                <div className='text-[35px] text-[#FC714D]'>+66.2%</div>
                <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                <span>WPPOOL</span>
                <span>index</span>
                </div>
                <div  style={{borderRightColor: '#FC714D'}} className='border-r-4'></div>
                </div>
                </div>
            </div>
            <div className='w-[25%] px-1 bg-[#F3F3F3] rounded-[10px] '>
                <div className='p-2 flex justify-between'>
                <div className='text-[35px] text-[#615DE3]'>+66.2%</div>
                <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                <span>Google</span>
                <span>index</span>
                </div>
                <div  style={{borderRightColor: '#615DE3'}} className='border-r-4'></div>
                </div>
                </div>
            </div>
            <div className='w-[25%] px-1 bg-[#F3F3F3] rounded-[10px] '>
                <div className='p-2 flex justify-between'>
                <div className='text-[35px] text-[#7CA63A]'>+66.2%</div>
                <div className='flex flex-row gap-2'>
                <div className=''>
                <span>Microsoft</span>
                </div>
                <div  style={{borderRightColor: '#7CA63A'}} className='border-r-4'></div>
                </div>
                </div>
            </div>
            <div className='w-[25%] px-1 bg-[#F3F3F3] rounded-[10px] '>
                <div className='p-2 flex justify-between'>
                <div className='text-[35px] text-[#6F34A1]'>+66.2%</div>
                <div className='flex flex-row gap-2'>
                <div className='flex flex-col'>
                <span>Twitter</span>
                <span>index</span>
                </div>
                <div  style={{borderRightColor: '#6F34A1'}} className='border-r-4'></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    {/* GRAPH */}

    </div>
    </div>



    </div>
    </div>
    </>
  )
}

export default WpIndex