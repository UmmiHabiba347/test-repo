import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LandingPage from './View/LandingPage';
import Navbar from './Components/Navbar';
import Course1 from './View/Course1';
import AboutUs from './View/Aboutus'
import Dialog from './Components/SubmitDialog';


function App() {
    
  
  return (
    <>
<div className='w-[100vw]'>
{/* <Navbar /> */}
{/* <LandingPage /> */}
 <Course1 />
 
 {/* <AboutUs /> */}


</div>

 
    </>
  );
}

export default App;
