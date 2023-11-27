import './App.css';
import YearInput from './Components/YearInput';
import YearlyInvesment from './Components/YearlyInvesment';
import InterestRate from './Components/InterestRate';
import DonutChart from './Components/DonutChart';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';


function App() {
  const [amount,setAmount] = useState(500)
  const [year,setYear] = useState(15)
  function ppfFutureValue(principal, rate, years) {
    // Convert the annual interest rate to a decimal
    const r = rate / 100;
    console.log(Math.pow(1 + r, years))
  
    // Calculate the future value
    const futureValue = principal * ((Math.pow(1 + r, years) - 1) / r);
  
    return futureValue.toFixed(2);
  }
  console.log(ppfFutureValue(100000,7.1,15))
  return (
    <div> 
      <div className="flex flex-row px-4  gap-4 m-4">
        <div className="basis-1/2">
          <YearlyInvesment amount={amount} setAmount={setAmount}/>
          <YearInput year={year} setYear={setYear}/>
          <InterestRate/>
        </div>
        <div className="basis-1/2 grid items-center"><div className=" h-80 justify-self-center"><DonutChart/></div></div>
      </div>
    </div> 
  );
}

export default App;
