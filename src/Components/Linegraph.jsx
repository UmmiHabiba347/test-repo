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

const generateRandomData = (numPoints, min, max) => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push((Math.random() * (max - min) + min).toFixed(2));
  }
  return data;
};

const LineChart = () => {
  const numPoints = 86778;
  const min = -10;
  const max = 90;

  const data = {
    labels: ['February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'WPPOOL',
        data: generateRandomData(numPoints, min, max),
        borderColor: '#fc714d',
        backgroundColor: '#fc714d',
        fill: false,
        tension: 0.005,
        pointRadius: false,
      },
      {
        label: 'Google',
        data: generateRandomData(numPoints, min, max),
        borderColor: '#615de3',
        backgroundColor: '#615de3',
        fill: false,
        tension: 0.005,
        pointRadius: false,
      },
      {
        label: 'Microsoft',
        data: generateRandomData(numPoints, min, max),
        borderColor: '#afcd80',
        backgroundColor: '#afcd80',
        fill: false,
        tension: 0.005,
        pointRadius: false,
      },
      {
        label: 'Twitter',
        data: generateRandomData(numPoints, min, max),
        borderColor: '#6f34a1',
        backgroundColor: '#6f34a1',
        fill: false,
        tension: 0.005,
        pointRadius: false,
      },
    ],
  };

  return (
    <div className='w-full h-[500px] py-4'>
      <Line data={data} options={options} style={{ width: '100% !important' }} />
    </div>
  );
}

export default LineChart;
