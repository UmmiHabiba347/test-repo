import logo from './logo.svg';
import './App.css';
import TeslaNav from './View/TeslaNav';
import Login from './View/Login';
import { DiVim } from 'react-icons/di';
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <>
      <div className='bg-[#b9babe]  relative w-100'>
        {/* TeslaNav placed here */}
        <div className="z-10 relative">
          <TeslaNav />
        </div>
        <div className='bg-[#b9babe]  relative'>
          <div className="relative">
            <img className='' width={'100%'} height={'full'} src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" alt="" />
            <div className="fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-60 z-10">
              <Login />
            </div>
     <div className='fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-40  z-10'>
            <div className='mt-[10%] flex flex-row gap-[30px] justify-center'>
                 <Button className='w-[150px] text-[#333] rounded-[5px] bg-[#fff] p-2 w-[250px]  ' color='white' variant="filled">Order Now</Button>
                 <Button className='w-[150px] text-[#333] rounded-[5px] bg-[#333333] text-white p-4 w-[250px]' color='#333333'  variant="filled">Demo</Button>
            </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
