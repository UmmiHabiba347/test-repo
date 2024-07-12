import React, { useState, useRef } from 'react';
import './Home.css';
import icon1 from '../assets/images/logo.png';
import img3 from '../assets/images/Group 441.png';
import centerBg from '../assets/images/WhatsApp Image 2024-07-10 at 9.21.24 AM.jpeg';
import { IoShareSocial, IoArrowDown } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import WpIndex from './WpIndex';
import AllCompanies from './AllCompanies';
import PotentialFutureListing from './PotentialFutureListing';
import StateOfUSA from './StateOfUSA';
import StoriesAndideas from './StoriesAndideas';
import SelectedWPPOOL from './SelectedWPPOOL';
import AoutWPOOL from './AoutWPOOL';
import Footer from './Footer';

function Home() {
    const [menu, setMenu] = useState(false);
    const wpIndexRef = useRef(null);
    const allCompaniesRef = useRef(null);
    const potentialFutureListingRef = useRef(null);
    const stateOfUSARef = useRef(null);
    const storiesAndIdeasRef = useRef(null);
    const aboutWpPoolRef = useRef(null);
    const selectedwppoolRef = useRef(null);

    const openMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className=''>
                <div className='w-full h-[100vh] bg-[#2042B6] relative'>
                    <div className='px-6 w-[100vw] flex flex-col py-6 justify-between h-[100vh]'>
                        {/* NAVBAR HERE */}
                        <div className='w-full px-2 text-[#333]'>
                            <div className='mx-auto flex justify-between items-center'>
                                <div>
                                    {/* logo image */}
                                    <div><img className='' src={icon1} alt="logo" /></div>
                                </div>

                                <div className='flex items-center justify-between gap-1 flex-wrap'>
                                    <div className='flex justify-between gap-1'>
                                        <ButtonGroup className="">
                                            <Button className="group rounded-full p-5 border border-white text-white bg-transparent hover:bg-white hover:text-[#2042B6]">
                                                <IoShareSocial size={'22px'} />
                                            </Button>
                                        </ButtonGroup>

                                        <ButtonGroup className="py-1">
                                            <Button style={{ whiteSpace: 'nowrap' }} className="rounded-full border border-[#fff] py-5 px-8 text-[10px] bg-[#2042B6] text-white hover:bg-[#fff] hover:text-[#2042B6]">
                                                Download the 2024 Report
                                            </Button>
                                        </ButtonGroup>
                                    </div>

                                    {/* SELECT */}
                                    <div className='flex items-center relative'>
                                        <span className='cursor-pointer' onClick={openMenu}>
                                            <GrMenu className='text-[40px] text-white' />
                                        </span>

                                        {menu && 
                                            <div className='absolute top-[-36px] right-[-15px] md:right-0 md:w-[22vw] rounded-3xl bg-white z-[9999]'>
                                                <div className='px-8 py-4'>
                                                    <div className='flex items-center justify-between gap-3'>
                                                        <ButtonGroup className="">
                                                            <Button className="group rounded-full p-4 bg-[#abc32f] text-white hover:bg-[#fff] hover:text-[#abc32f]">
                                                                <IoShareSocial size={'20px'} />
                                                            </Button>
                                                        </ButtonGroup>

                                                        <ButtonGroup className="py-1">
                                                            <Button style={{ whiteSpace: 'nowrap' }} className="rounded-full py-5 px-8 text-[10px] bg-[#2042B6] text-white hover:bg-[#fff] hover:text-[#2042B6]">
                                                                Download the 2024 Report
                                                            </Button>
                                                        </ButtonGroup>

                                                        <RxCross2 color='gray' size='30px' style={{ color: 'gray' }} className="hover:text-[#333]" onClick={closeMenu} />
                                                    </div>

                                                    <div className='flex flex-col gap-4 mt-6 text-[#333] fonnt-normal text-[20px]'>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(wpIndexRef); closeMenu(); }}>The WPPOOL index</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(allCompaniesRef); closeMenu(); }}>All Companies</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(potentialFutureListingRef); closeMenu(); }}>Potential Future Listings</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(stateOfUSARef); closeMenu(); }}>State of USA</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(storiesAndIdeasRef); closeMenu(); }}>Stories and Ideas</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => { scrollToSection(aboutWpPoolRef); closeMenu(); }}>About WPPOOL</div>
                                                        <div className='hover:bg-[#CCCCCC] px-2 rounded cursor-pointer' onClick={() => {scrollToSection(selectedwppoolRef); closeMenu(); }}>WPPOOL Portfolio Companies</div>
                                                        <a href="https://wppool.dev/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Nantes' }} className='text-[23px] mt-3 text-[#2042B6] cursor-pointer hover:bg-[#CCCCCC] px-2 rounded' onClick={closeMenu}>Visit WPPOOL</a>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center image */}
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <img src={centerBg} alt="" />
                        </div>
                        

                        {/* img3 */}
                        <div className='px-2 flex flex-row justify-between items-end'>
                            <div className=''>
                                <img className='w-[60vw] md:w-full' src={img3} alt="" />
                            </div>
                            <div className='bg-[#fff] shadow-3xl rounded-full'>
                                <ButtonGroup className="">
                                    <Button className="group rounded-full p-6 bg-[#fff] shadow-3xl hover:bg-[#CCCCCC]" onClick={() => scrollToSection(wpIndexRef)}>
                                        <IoArrowDown color='#2042B6' size={'30px'} />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={wpIndexRef}>
                    <WpIndex />
                </div>
                <div ref={allCompaniesRef}>
                    <AllCompanies />
                </div>
                <div ref={potentialFutureListingRef}>
                    <PotentialFutureListing />
                </div>
                <div ref={stateOfUSARef}>
                    <StateOfUSA />
                </div>
                <div ref={storiesAndIdeasRef}>
                    <StoriesAndideas />
                </div>
                <div ref={aboutWpPoolRef}>
                    <AoutWPOOL />
                </div>
                <div ref={selectedwppoolRef}>
                    <SelectedWPPOOL />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
