import React from 'react';
import './Home.css';
import { Navbar } from "@material-tailwind/react";
import icon1 from '../assets/images/logo.png';
import icon2 from '../assets/images/Group 442.png';
import img3 from '../assets/images/Group 441.png';
import img4 from '../assets/images/Group 342.png';
import { IoShareSocial } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import { Select, Option } from "@material-tailwind/react";

function Home() {
    return (
        <>
        <div className='p-6'>
            <div className='w-full h-[100vh] bg-[#2042B6] relative'>

                <div className='flex flex-col py-6 justify-between h-[100vh]'>
                    {/* NAVBAR HERE */}
                    <div className='w-full px-4 text-[#333]'>
                        <div className='mx-auto flex justify-between'>
                        <div>
                         {/* logo image */}
                        <div><img className='w-100 h-100' src={icon1} alt="logo" /></div>
                        </div>

                        <div>
                        <div className='flex justify-between gap-4'>

                        <div className='flex justify-between gap-3'>
                        <div>
                         <ButtonGroup className="">
                         <Button className="group rounded-full p-5 border border-white text-white bg-transparent hover:bg-white hover:text-[#2042B6]">
                         <span className="text-white group-hover:text-[#2042B6]"><IoShareSocial size={'22px'} /></span>
                         </Button>
                         </ButtonGroup>
                         </div>

                         <div>
                         <ButtonGroup className="py-1">
                         <Button className="rounded-full py-5 border border-white text-white px-8 bg-transparent hover:bg-white hover:text-black">  Download the 2024 Report</Button>
                         </ButtonGroup>
                         </div>
                                        

                        </div>

        <div className="flex items-center"><GrMenu color='#fff' size={"50px"} className="mr-2" /> </div>
                            
{/* <div className='py-2'>
    <Select style={{border:"none"}} className='w-[380px] p-4' label={
        <div className="flex items-center"><GrMenu color='#fff' size={"50px"} className="mr-2" /> </div>}>
        <Option>
                                             <div className='flex justify-between gap-3'>
                                        <div>
                                            <ButtonGroup className="">
                                                <Button className="group rounded-full p-5 bg-[#2042B6] text-white">
                                                    <span className="text-white group-hover:text-[#2042B6]"><IoShareSocial size={'22px'} /></span>
                                                </Button>
                                            </ButtonGroup>
                                        </div>

                                        <div>
                                            <ButtonGroup className="py-1">
                                                <Button className="rounded-full py-5 px-8  bg-[#2042B6] text-white">
                                                    Download the 2024 Report
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                        

                                    </div> 
        </Option>
        <Option>The WPPOOL index</Option>
        <Option>All Companies</Option>
        <Option>Potential Future Listings</Option>
        <Option>State of USA</Option>
        <Option>Stories and Ideas</Option>
        <Option>About WPPOOL</Option>
        <Option>WPPOOL Portfolio Companies</Option>
        <Option ><span  className='text-[#2042B6] font-semibold'>Visit WPPOOL</span></Option>
    </Select>
</div> */}


                                </div>
                            </div>



                        </div>
                    </div>

                    {/* Center image */}
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <img src={img4} alt="centered"  />
                    </div>

                    {/* img3 */}
                    <div className='px-4'>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
