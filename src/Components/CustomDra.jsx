import React from 'react'
import {
    Drawer,
    Button,
    Typography,
    IconButton,
  } from "@material-tailwind/react";


function CustomDraw({open, onClose,width,size, placement,title,body,footer}) {
    console.log(open)
    console.log(onClose)
    console.log(placement)
    // console.log(width)
    console.log(title)
    console.log(body)
    console.log(footer)
    console.log(size)



  return (
    <Drawer placement={placement} open={open} onClose={onClose} size='500' className="p-4 z-70"   >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
       {body}
      </Typography>
      <div className="flex gap-2">
        {footer}
        {/* <Button size="sm" variant="outlined">
          
        </Button>
        <Button size="sm">Get Started</Button> */}
      </div>
    </Drawer>
  );
}

export default CustomDraw;