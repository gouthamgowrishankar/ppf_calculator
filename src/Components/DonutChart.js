import {React} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ppfAmount, setPPFAmount}) => {
  //console.log('chartlog', ppfAmount)
    const data = {
        labels: [
          'Invested Amount',
          'Expected Return'
        ],
        datasets: [{
          label: 'ppf investment',
          data: [ ppfAmount.investedAmount,ppfAmount.increasedAmount],
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