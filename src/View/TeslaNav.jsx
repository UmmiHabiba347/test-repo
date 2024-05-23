import React from 'react';
import { useState } from 'react';
import {
    Navbar} from "@material-tailwind/react";
import { PiGlobe } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import CutomDraw from '../Components/CustomDra';
import Vehicles from './Vehicles';

function TeslaNav() {
    const [showCanvas, setShowCanvas] = useState(false)
  const [canvasTitle, setCanvasTitle] = useState('');
  const [canvasChildren, setCanvasChildren] = useState(null);

  const handleCanvas = (targetCavnas)=>{
    console.log(targetCavnas)
    if(targetCavnas === 'Attendance1'){
      setCanvasTitle('')
      setCanvasChildren(<Vehicles />)
    }
    
    setShowCanvas(true)

  }

    return (
        <>
            <div className='w-full '>
                <div className='fixed top-0 left-0 w-full py-4 px-4 text-[#333]'>
                    <div className='  mx-auto  flex justify-between'>
                        <div>
                            {/* Tesla logo SVG code */}
                            <h1 className="tds-site-logo tds-align--start mt-[10px]" alt="This is a Tesla Logo">
                                <a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                                    <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
                                    </svg>
                                  
                                </a>
                                <a className="tds-skip-to-content tds--is_visually_hidden" href="#main-content" id="top-of-page">- - - - - - - - - - -</a>
                            </h1>
                        </div>

                        <div className='font-semibold text-[16px]'>
                            <ul className='flex flex-row gap-4'>
                                <li onClick={()=>handleCanvas('Attendance1')}>Vehicles</li>
                                <li>Energy</li>
                                <li>Charging</li>
                                <li>Discover</li>
                                <li>Shop</li>
                            </ul>
                        </div>

                    <div className=''>
                        <div className='flex justify-between gap-2'>
                            <div><PiGlobe size={'28px'} /></div>
                            <div><IoMdHelpCircleOutline size={'28px'} /></div>
                            <div><IoPersonCircleOutline size={'28px'} /></div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>

            <CutomDraw
            open={showCanvas}
            onClose={()=>setShowCanvas(false)}
            title= {canvasTitle}
            placement="top"
            width={'45%'} 
            body = {canvasChildren}

            />

        {/* <Canvas
        show = {showCanvas}
        handleClose = {()=>setShowCanvas(false)}
        title= {canvasTitle}
        body = {canvasChildren}
        placement={'end'}
        width={'45%'}
      /> */}
        </>
    )
}

export default TeslaNav;
