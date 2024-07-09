import React from 'react';
import { Button, Select } from "@material-tailwind/react";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

function Pagination() {
  const [active, setActive] = React.useState(0);
  const [pageGroup, setPageGroup] = React.useState(1);

  const cardContents = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    content: `Content for Card ${index + 1}`,
    imageUrl: `https://picsum.photos/400/200?random=${index + 1}`,
  }));

  const itemsPerPage = 3; // Display 3 cards per page

  const totalPages = Math.ceil(cardContents.length / itemsPerPage);

  const next = () => {
    setActive((prevActive) => (prevActive + itemsPerPage) % cardContents.length);
    setPageGroup((prevGroup) => Math.ceil((prevGroup * 2 + 1) / 2)); // Move to next page group
  };

  const prev = () => {
    setActive((prevActive) => (prevActive - itemsPerPage + cardContents.length) % cardContents.length);
    setPageGroup((prevGroup) => Math.max(prevGroup - 1, 1)); // Move to previous page group
  };

  const handlePageGroupChange = (value) => {
    setPageGroup(value);
    setActive((value * 2 - 2) * itemsPerPage); // Update active page based on selected group
  };

  const getPageGroupOptions = () => {
    const options = [];
    for (let i = 1; i <= Math.ceil(totalPages / 2); i++) {
      options.push({
        value: i,
        label: `${2 * i - 1} and ${2 * i}`,
      });
    }
    return options;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-center mt-4 overflow-x-auto gap-4">
        {cardContents.slice(active, active + itemsPerPage).map((card) => (
          <div key={card.id} className="w-[40%] md:w-[30%] border rounded-lg flex-shrink-0">
            <img
              src={card.imageUrl}
              alt={`Card ${card.id}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4 ml-4">
        <Button
          variant="text"
          className="flex items-center justify-center gap-2 h-[60px] w-[60px] bg-[#fff] shadow-2xl rounded-full"
          onClick={prev}
          style={{ marginRight: '10px' }}
        >
          <div><IoArrowBack color='#2042B6' size={'25px'} /></div>
        </Button>
        <Button
          variant="text"
          className="flex items-center justify-center gap-2 h-[60px] w-[60px] bg-[#fff] shadow-2xl rounded-full"
          onClick={next}
        >
          <div><IoArrowForwardOutline size={'25px'} color='#2042B6' /></div>
        </Button>
        <div className='ml-2'> Pages </div>
        <div className="ml-4">
          <Select
            value={pageGroup}
            onChange={(e) => handlePageGroupChange(e.target.value)}
            className="bg-[#2042B6] text-[#333] bg-[#fff] font-Nantes text-md h-16 py-2 pl-4 pr-4 rounded-full"
          >
            {getPageGroupOptions().map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
