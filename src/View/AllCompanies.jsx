import React from 'react';
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";
import { ButtonGroup, Button } from "@material-tailwind/react";


function AllCompanies() {
  // Sample data for the table rows
  const tableData = [
    { company: 'Adyen', ticker: 'AAA', vertical: 'Technology', price: '$100', marketCap: '50', revenueGrowth: '+5%', grossMargin: '30%', evRevenue: '20%', ytdPerformance: '+15%' },
    { company: 'Affirm', ticker: 'BBB', vertical: 'Finance', price: '$150', marketCap: '80', revenueGrowth: '+8%', grossMargin: '25%', evRevenue: '18%', ytdPerformance: '+12%' },
    { company: 'Alkami Technology', ticker: 'CCC', vertical: 'Healthcare', price: '$120', marketCap: '65', revenueGrowth: '+3%', grossMargin: '28%', evRevenue: '22%', ytdPerformance: '+10%' },
    { company: 'AvidXchange', ticker: 'DDD', vertical: 'Retail', price: '$80', marketCap: '40', revenueGrowth: '+2%', grossMargin: '20%', evRevenue: '15%', ytdPerformance: '+8%' },
    { company: 'Bakht Holdings', ticker: 'EEE', vertical: 'Energy', price: '$110', marketCap: '55', revenueGrowth: '+6%', grossMargin: '32%', evRevenue: '25%', ytdPerformance: '+18%' },
    { company: 'Virtue Financial Inc', ticker: 'FFF', vertical: 'Telecom', price: '$95', marketCap: '45', revenueGrowth: '+4%', grossMargin: '27%', evRevenue: '21%', ytdPerformance: '+14%' },
    { company: 'Adyen', ticker: 'GGG', vertical: 'Manufacturing', price: '$130', marketCap: '70', revenueGrowth: '+7%', grossMargin: '29%', evRevenue: '23%', ytdPerformance: '+16%' },
    { company: 'Affirm', ticker: 'HHH', vertical: 'Automotive', price: '$140', marketCap: '75', revenueGrowth: '+9%', grossMargin: '31%', evRevenue: '24%', ytdPerformance: '+20%' },
    { company: 'Alkami Technology', ticker: 'III', vertical: 'Entertainment', price: '$105', marketCap: '60', revenueGrowth: '+5%', grossMargin: '30%', evRevenue: '19%', ytdPerformance: '+13%' },
    { company: 'AvidXTechnology', ticker: 'JJJ', vertical: 'Services', price: '$125', marketCap: '68', revenueGrowth: '+6%', grossMargin: '33%', evRevenue: '26%', ytdPerformance: '+17%' },
  ];

  // Options for the dropdown/select input (for header only)
  const tickerOptions = [
    { value: 'Ticker', label: 'Ticker' },
    { value: 'Ticker', label: '' },   
  ];

  return (
    <div className='p-6'>
      <div className='w-full h-[100vh] bg-[#fff] relative mt-2  p-4 shadow-lg border border-grey rounded-[30px]'>
        <div className='px-8 flex flex-row items-center justify-between'>
          <div style={{fontFamily:'Nantes'}} className='text-[45px] font-normal'>All Companies</div>
          <div>
            {/* SEARCH INPUT FIELD */}
            <div className="w-[35vw]">
      <div className="relative w-full !min-w-[200px] h-[50px]">
        <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 left-3 -translate-y-2/4">
          <span><IoSearchSharp color='#333' size={'20px'} /></span>
        </div>
        <input
          className="peer w-full h-full bg-[#F3F3F3] px-10 py-3 border border-[#DADADA] text-[#333] font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder:text-[20px] placeholder:text-[#333] placeholder:font-sans placeholder-[Nantes] rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          placeholder="Search Companies"
          style={{ fontFamily: 'Nantes !important' }} // Inline style for placeholder font family
        />
        <label className="hidden"></label>
      </div>
      </div>

       
          </div>
        </div>

        {/* TABLE CONTENT */}
        <div className="h-[500px] customScroll overflow-scroll mt-4 px-4">
          <table className="bg-white w-full rounded-[10px] my-6">
            <thead>
              <tr className="bg-white text-black text-[18px] text-sm">
                <th className="py-3 px-6 text-left font-bold">Company</th>
                <th className="py-3 px-6 text-left">
                  <select className="border-none bg-transparent" defaultValue="">
                    <option disabled value="">Ticker</option>
                    {tickerOptions.map((option, idx) => (
                      <option key={idx} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </th>
                <th className="py-3 px-6 text-left">Vertical</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Market Cap ($B)</th>
                <th className="py-3 px-6 text-left">Revenue Growth</th>
                <th className="py-3 px-6 text-left">Gross Margin</th>
                <th className="py-3 px-6 text-left">EV Revenue</th>
                <th className="py-3 px-6 text-left">YTD Performance</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {tableData.map((row, index) => (
                <tr key={index} style={{border:'none' ,border:'none',borderRadius:'10px !impoetant',fontWeight:'600',color:'#333',fontFamily:'Nantes',fontSize:'16px'}} className={`!rounded-[10px] ${index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#F3F3F3]'} rounded-[10px] border-b border-gray-200 hover:bg-gray-100`}>
                  <td className="py-3 px-6 text-left">{row.company}</td>
                  <td className="py-3 px-6 text-left">{row.ticker}</td>
                  <td className="py-3 px-6 text-left">{row.vertical}</td>
                  <td className="py-3 px-6 text-left">{row.price}</td>
                  <td className="py-3 px-6 text-left">{row.marketCap}</td>
                  <td className="py-3 px-6 text-left">{row.revenueGrowth}</td>
                  <td className="py-3 px-6 text-left">{row.grossMargin}</td>
                  <td className="py-3 px-6 text-left">{row.evRevenue}</td>
                  <td className="py-3 px-6 text-left">{row.ytdPerformance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* BUTTONS */}
      <div className='flex justify-center gap-2 mt-8'>
      <div>
        <ButtonGroup className="rounded-full">
          <Button
            className="group rounded-full py-4 px-8 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none shadow-[0px 4px 8px rgba(32,66,182,0.5)]"
          >
            <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
              Download 'All Companies' Data
            </span>
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <ButtonGroup className="rounded-full">
          <Button
            className="group rounded-full shadow-[0px 4px 8px rgba(32,66,182,0.5)] py-4 px-10 border border-[#2042B6] text-white bg-[#2042B6] hover:bg-white hover:text-[#2042B6] hover:border-white focus:outline-none"
          >
            <span style={{ textTransform: 'none', fontFamily: 'Poppins' }} className="text-[14px] font-normal text-white group-hover:text-[#2042B6]">
              View Methodology
            </span>
          </Button>
        </ButtonGroup>
      </div>
      </div>
  

    </div>
  );
}

export default AllCompanies;
