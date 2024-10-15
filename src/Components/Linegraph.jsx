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
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin // Register the annotation plugin
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: true,
        color: '#CCCCCC', // Set color for grid lines
        borderColor: '#9B9B9B',
        borderWidth: 3,
        drawOnChartArea: false, // Ensure grid lines are drawn on the chart area
        drawTicks: false, // Disable ticks if unnecessary
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
        color: '#CCCCCC', // Set color for grid lines
        borderColor: '#9B9B9B',
        borderWidth: 3,
        drawOnChartArea: true, // Ensure grid lines are drawn on the chart area
        drawTicks: false, // Disable ticks if unnecessary
      },
      ticks: {
        callback: function (value) {
          return value + '%';
        },
        stepSize: 10,
        padding: 5,
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
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          xMin: 14, // Position the line between April and May
          xMax: 14,
          borderColor: '#333',
          borderWidth: 2,
          label: {
            content: 'Threshold',
            enabled: true,
            position: 'center',
          }
        }
      }
    },
    maintainAspectRatio: false,
  },
};

const LineChart = () => {
  const data = {
    labels: ['', '', '','','', 'February','', '', '', '','', 'March','', '', '','', 'April', '', '', '', 'May', '', '', 'June', '', '', 'July'],
    datasets: [
      {
        label: 'WPPOOL',
        data: [4, 10, 15, 38, 25, 60, 22,16, 32, 22, 77, 47, 52, 13, 17, 64,77, 49, 24, 41, 55, 30, 35, 40, 50, 60, 55, 83, 60, 56, 30],
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
        data: [3, 5, 11, 17, 12, 19, 18, 10,22 ,25, 17, 24, 31, 33, 27, 37, 26, 29, 38, 41, 23, 19, 28, 26, 37, 35, 43, 32, 25, 20],
        borderColor: '#6f34a1',
        backgroundColor: '#6f34a1',
        fill: false,
        tension: 0.005,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      <div style={{ width: "100%" }} className='w-full h-full py-0'>
        <Line data={data} options={options} />
      </div>
      
    </div>
  );
}

export default LineChart;
