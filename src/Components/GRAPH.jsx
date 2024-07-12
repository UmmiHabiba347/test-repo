import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        color: '#f9f9f9',
      },
      border: {
        display: true,
        color: '#9FA0A1',
      }
    },
    y: {
      grid: {
        display: true,
        color: '#f9f9f9',
      },
      ticks: {
        callback: function (value) {
          return value + '%'; // Add percentage sign
        },
        stepSize: 5, // Define step size to control the y-axis intervals
      },
      border: {
        display: true,
        color: '#9FA0A1',
      },
      min: -10,
      max: 100,
    },
  },
  plugins: {
    legend: {
      align: 'center',
      position: 'bottom',
      labels: {
        usePointStyle: false,
        boxWidth: 7,
        boxHeight: 5,
      },
    },
    title: {
      display: false,
      padding: 20,
    },
    maintainAspectRatio: false,
  },
  elements: {
    line: {
      tension: 0.7, // No smoothing
      pointRadius: false, // Remove the dots from the lines
    },
  },
};

const data = {
  labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'WPPOOL',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
      borderColor: '#fc714d',
      backgroundColor: '#fc714d',
      fill: false,
    },
    {
      label: 'Google',
      data: [4, 7, 15, 4, 30, 20, 50, 30, 70, 80, 85, 75, 95, 150, 120, 210, 230, 203, 189, 240, 255, 355, 375, 389, 260, 240, 213],
      borderColor: '#615de3',
      backgroundColor: '#615de3',
      fill: false,
    },
    {
      label: 'Microsoft',
      data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265],
      borderColor: '#afcd80',
      backgroundColor: '#afcd80',
      fill: false,
    },
    {
      label: 'Twitter',
      data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260],
      borderColor: '#6f34a1',
      backgroundColor: '#6f34a1',
      fill: false,
    },
  ],
};

const LineChart = () => {
  return (
    <div className='w-[80vw] h-[400px] px-1'>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
