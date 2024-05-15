import React from 'react'
import { FaPinterest } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

function Navbar() {
   
    
  return (

    <>  
    <div className='flex justify-between p-4'>

    <div className=' flex gap-[3%]'>
 
        <div>
            <img height={'100px'} width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOauqsi9cETrGw5IHc5RslDa5OmgFUlxo8yJj8mvP8yMQjFX_sYnYWsp27cQ&s" alt="" />
        </div>

        <div>
            <span className='text-[18px] font-semibold'>Watch</span>
        </div>

        <div>
            <span className='text-[18px] font-semibold'>Explore</span>
        </div>
    </div>

    <div className='p-4 flex gap-[3%]'>

        <div>
            <span className='text-[18px] font-semibold'>About</span>
        </div>

        <div>
            <span className='text-[18px] font-semibold'>Business</span>
        </div>

        <div>
            <span className='text-[18px] font-semibold'>Press</span>
        </div>

        <div className='flex gap-2 '>
       <div><Button  className="rounded-full w-[85px]  bg-[#cc0000]">Log In</Button></div> 
       <div><Button  className="rounded-full w-[85px]  bg-[#e2e2e2] text-[#333]">Sign Up</Button></div> 

        </div>
    </div>

    </div> 
    </>
  )
}

export default Navbar