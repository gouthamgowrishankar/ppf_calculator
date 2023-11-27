import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
        labels: [
          'Invested Amount',
          'Expected Return'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [ 50, 50],
          backgroundColor: [
            'rgb(255, 205, 86)','rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      };
  return (
    <Doughnut
        data={data} options={{
            responsive: true,
            maintainAspectRatio: true,
            animations: false
          }}/>)
}

export default DonutChart