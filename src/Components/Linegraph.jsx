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
        display: true,
        color: '#f9f9f9',
        borderColor: '#333',
        borderWidth: 1,
      },
      ticks: {
        padding: 10,
      },
    },
    y: {
      min: -10,
      max: 100,
      grid: {
        display: true,
        color: "#f9f9f9",
        borderColor: '#333',
        borderWidth: 1,
      },
      ticks: {
        callback: function (value) {
          return value + '%';
        },
        stepSize: 10,
        padding: 10,
      },
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
      }
    },
    title: {
      display: false,
      padding: 10
    },
    maintainAspectRatio: false,
  },
};

const LineChart = () => {
  const data = {
    labels: ['', '', '', 'February', '', '', '', 'March', '', '', 'April', '', '', '', 'May', '', '', 'June', '', '', 'July'],
    datasets: [
      {
        label: 'WPPOOL',
        data: [4, 10, 15, 38, 25, 60, 22,16, 32, 22, 77, 47, 52, 13, 17, 94,97, 59, 54, 71, 75, 30, 35, 40, 50, 60, 55, 83, 60, 56, 30],
        borderColor: '#fc714d',
        backgroundColor: '#fc714d',
        fill: false,
        tension: 0.005,
        pointRadius: 0,
      },
      {
        label: 'Google',
        data: [10, 17, 20, 24, 32, 25, 60, 45, 43, 62, 73, 74, 51, 63, 67, 74, 82, 45, 38, 69, 71, 66, 48, 46, 67, 75, 73, 72, 65, 40],
        borderColor: '#615de3',
        backgroundColor: '#615de3',
        fill: false,
        tension: 0.005,
        pointRadius: 0,
      },
      {
        label: 'Microsoft',
        data: [-1, -3, -5, 15, -1, -3, 42, 35, -4, 41, 22, 62, 37,10, 81, 65, 69, 20, 85, 45, 38, 69, 71, 66, 48, 46, 67, 75, 73, 72, 65, 40],
        borderColor: '#afcd80',
        backgroundColor: '#afcd80',
        fill: false,
        tension: 0.005,
        pointRadius: 0,
      },
      {
        label: 'Twitter',
        data: [6, 8, 15, 20, 12, 25, 34, 31, 32, 42, 37, 54, 61, 33, 57, 54, 76, 35, 38, 71, 68, 66, 48, 46, 67, 75, 73, 72, 65, 40],
        borderColor: '#6f34a1',
        backgroundColor: '#6f34a1',
        fill: false,
        tension: 0.005,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div style={{width:"full"}} className='w-full h-[500px] py-2'>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
