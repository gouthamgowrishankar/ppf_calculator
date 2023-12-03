import './App.css';
import YearInput from './Components/YearInput';
import YearlyInvesment from './Components/YearlyInvesment';
import InterestRate from './Components/InterestRate';
import DonutChart from './Components/DonutChart';
import { useState, useEffect } from 'react';


function App() {
  
  
  const ppfFutureValue = (principal, rate, years) =>{
    console.log(principal,rate,years)
    // Convert the annual interest rate to a decimal
    const i = rate / 100;
    console.log(Math.pow(1 + i, years))
    // Calculate the future value
    const futureValue = principal * ((Math.pow(1 + i, years) - 1) / i);
    const totalAmount = parseInt(futureValue.toFixed(2));
    const investedAmount = principal*years;

    return {totalAmount:totalAmount, investedAmount: investedAmount, increasedAmount: totalAmount - investedAmount};
  }
  const [amount,setAmount] = useState(500)
  const [year,setYear] = useState(15)
  const [ppfAmount,setPPFAmount] = useState(ppfFutureValue(amount,7.1,year))
  useEffect(() =>{ 
    setPPFAmount( ppfFutureValue(amount,7.1,year));
    console.log("effect taking place")}
  , [amount,year]);
  
  //console.log(ppfFutureValue)
  return (
    <div> 
      <div className="flex flex-row px-4  gap-4 m-4">
        <div className="basis-1/2">
          <YearlyInvesment amount={amount} setAmount={setAmount}/>
          <YearInput year={year} setYear={setYear}/>
          <InterestRate/>
        </div>
        <div className="basis-1/2 grid items-center"><div className=" h-80 justify-self-center"><DonutChart ppfAmount={ppfAmount} setPPFAmount={setPPFAmount} /></div></div>
        
      </div>
        <div className='bg-slate-700 m-4 flex justify-center text-white rounded-lg'>
          <div className='m-4'>
            Maturity Amount {(ppfAmount.totalAmount).toLocaleString('en-IN', {
                                                  maximumFractionDigits: 2,
                                                  style: 'currency',
                                                  currency: 'INR'
                                              })}
          </div>
        </div>
    </div> 
  );
}

export default App;
