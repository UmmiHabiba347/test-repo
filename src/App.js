import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LandingPage from './View/LandingPage';
import Navbar from './Components/Navbar';
import Course1 from './View/Course1';
import AboutUs from './View/Aboutus'
import Dialog from './Components/SubmitDialog';
import { FaSquareCheck } from "react-icons/fa6";

function App() {
    
  // const [ShowDialog, setShowDialog] = useState(false)
  // const [DialogTitle, setDialogTitle] = useState('');
  // const [DialogChildren, setDialogChildren] = useState(null);

  // const handleModal = (targetModal)=>{
  //   console.log(targetModal)
  //   if(targetModal === 'dialog'){
  //     setDialogTitle('')
  //     setDialogChildren(<Dialog />)
  //   }
  //   setShowDialog(true)
  // }
  
  return (
    <>
<div className='w-[100vw]'>
{/* <Navbar /> */}
{/* <LandingPage /> */}
 <Course1 />
 {/* <AboutUs /> */}


</div>
{/* <button onClick={()=>handleModal('dialog')} className='text-[20px] rounded-lg py-4 px-8 font-bold'>submit</button>

      <Dialog
        show = {ShowDialog}
        handleClose = {()=>setShowDialog(false)}
        Title= {'Form Submitted Successfully'}
        body = {<FaSquareCheck size={'100px'} color='#1D8C6E' />}
        size={'sm'}
        position={'top'}
             
      /> */}
 
    </>
  );
}

export default App;
