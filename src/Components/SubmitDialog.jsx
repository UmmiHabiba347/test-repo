import React from 'react';
import { Dialog as MaterialDialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

function CustomDialog({ Footer, Title, body, position, size, handleClose, show }) {
  return (
    <MaterialDialog open={show} size={size} handler={handleClose} className={position}>
      <DialogHeader className="text-[25px] flex justify-center text-[#1D8C6E] font-bold">
        {Title}       
      </DialogHeader>

      <DialogBody className="text-[14px] flex justify-center  px-6 py-4">
        {body}
      </DialogBody>

      <DialogFooter className="text-[12px] font-normal">
        <Button 
          variant="outlined" 
          className="text-[#9b9b9b] border-[#e5e5e5] rounded-md py-2 px-4 font-semibold" 
          onClick={handleClose}
        >
          Close
        </Button>
        {Footer}
      </DialogFooter>
    </MaterialDialog>
  );
}

export default CustomDialog;
