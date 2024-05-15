import React from 'react';
import { useState } from 'react';
import {
    Navbar} from "@material-tailwind/react";
import { PiGlobe } from "react-icons/pi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import CutomDraw from '../Components/CustomDra';

function TeslaNav() {
    const [open, setOpen] = useState(false);
    // const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <div>
                <Navbar className='fixed top-0 left-0 w-full py-4 text-[#333]'>
                    <div className='container mx-auto flex justify-between'>
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
                            <ul className='flex flex-row gap-[30px]'>
                                <li>Vehicles</li>
                                <li>Energy</li>
                                <li>Charging</li>
                                <li>Discover</li>
                                <li>Shop</li>
                            </ul>
                        </div>

                        <div className='flex justify-between gap-[15px]'>
                            <div onClick={openDrawer}><PiGlobe size={'28px'} /></div>
                            <div><IoMdHelpCircleOutline size={'28px'} /></div>
                            <div><IoPersonCircleOutline size={'28px'} /></div>
                        </div>
                    </div>
                </Navbar>
            </div>

            <CutomDraw
            open={open}
            onClose={closeDrawer}
            placement="top"
            // width={'100%'} // Set your default width here
            // body={'this is the body of drawer'}
            />
        </>
    )
}

export default TeslaNav;
