
import React from "react";
import { FaPinterest } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Card,
} from "@material-tailwind/react";
function TailwindNavbar() {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center font-bold">
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center font-bold">
            Business
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center font-bold">
            Press
          </a>
        </Typography>
      </ul>
    );

  return (  
    <>
    {/* removedover */}
     <div className="  -m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 mt-4 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className=" mr-4 cursor-pointer py-1.5 font-medium"
          >
          <div className="flex gap-[30px]">
          <div>
            <span className='font-bold text-[20px]'>T E S L A</span>
        </div>


          </div>  
          </Typography>
          
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className=" flex items-center gap-x-1">
            <div><Button  className="rounded-full w-[85px] h-[40px] text-[#fff] bg-[#e60023]">Log In</Button></div> 
            <div><Button  className="rounded-full w-[85px] h-[40px] bg-[#e2e2e2] text-[#333]">Sign Up</Button></div> 
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="filled" size="sm" className="">
              Log In
            </Button>
            <Button fullWidth variant="filled" size="sm" className="">
              Sign Up
            </Button>
          </div>
        </MobileNav>
      </Navbar>

    </div>
    </>
  )
}

export default TailwindNavbar