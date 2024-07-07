import React from 'react';
import { Input } from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";

function AllCompanies() {
  // Sample data for the table rows
  const tableData = [
    { company: 'Company A', ticker: 'AAA', vertical: 'Technology', price: '$100', marketCap: '50', revenueGrowth: '+5%', grossMargin: '30%', evRevenue: '20%', ytdPerformance: '+15%' },
    { company: 'Company B', ticker: 'BBB', vertical: 'Finance', price: '$150', marketCap: '80', revenueGrowth: '+8%', grossMargin: '25%', evRevenue: '18%', ytdPerformance: '+12%' },
    { company: 'Company C', ticker: 'CCC', vertical: 'Healthcare', price: '$120', marketCap: '65', revenueGrowth: '+3%', grossMargin: '28%', evRevenue: '22%', ytdPerformance: '+10%' },
    { company: 'Company D', ticker: 'DDD', vertical: 'Retail', price: '$80', marketCap: '40', revenueGrowth: '+2%', grossMargin: '20%', evRevenue: '15%', ytdPerformance: '+8%' },
    { company: 'Company E', ticker: 'EEE', vertical: 'Energy', price: '$110', marketCap: '55', revenueGrowth: '+6%', grossMargin: '32%', evRevenue: '25%', ytdPerformance: '+18%' },
    { company: 'Company F', ticker: 'FFF', vertical: 'Telecom', price: '$95', marketCap: '45', revenueGrowth: '+4%', grossMargin: '27%', evRevenue: '21%', ytdPerformance: '+14%' },
    { company: 'Company G', ticker: 'GGG', vertical: 'Manufacturing', price: '$130', marketCap: '70', revenueGrowth: '+7%', grossMargin: '29%', evRevenue: '23%', ytdPerformance: '+16%' },
    { company: 'Company H', ticker: 'HHH', vertical: 'Automotive', price: '$140', marketCap: '75', revenueGrowth: '+9%', grossMargin: '31%', evRevenue: '24%', ytdPerformance: '+20%' },
    { company: 'Company I', ticker: 'III', vertical: 'Entertainment', price: '$105', marketCap: '60', revenueGrowth: '+5%', grossMargin: '30%', evRevenue: '19%', ytdPerformance: '+13%' },
    { company: 'Company J', ticker: 'JJJ', vertical: 'Services', price: '$125', marketCap: '68', revenueGrowth: '+6%', grossMargin: '33%', evRevenue: '26%', ytdPerformance: '+17%' },
  ];

  // Options for the dropdown/select input (for header only)
  const tickerOptions = [
    { value: 'Ticker', label: 'Ticker' },
    { value: 'Ticker', label: '' },   
  ];

  return (
    <div className='p-6'>
      <div className='w-full h-[100vh] bg-[#fff] relative mt-2  p-4 shadow-lg border border-grey rounded-[20px]'>
        <div className='px-8 flex flex-row justify-between'>
          <div className='text-[45px] font-normal'>All Companies</div>
          <div>
            {/* SEARCH INPUT FIELD */}
            <div className="w-100 p-6">
              <Input size='md'  icon={<IoSearchSharp size={'20px'} />} label="Search Companies" />
            </div>
          </div>
        </div>

        {/* TABLE CONTENT */}
        <div className="overflow-x-auto px-4">
          <table className="min-w-full bg-white rounded-[10px] my-6">
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
                <tr key={index} style={{border:'none',borderRadius:'10px !impoetant'}} className={`!rounded-[10px] ${index % 2 === 0 ? 'bg-[#fff]' : 'bg-[#F3F3F3]'} border-b border-gray-200 hover:bg-gray-100`}>
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
    </div>
  );
}

export default AllCompanies;
