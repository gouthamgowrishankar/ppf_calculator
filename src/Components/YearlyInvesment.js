import React from 'react'
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const YearlyInvesment = ({amount,setAmount}) => {
  return (
  <div>
    <div className="flex flex-row p-4">
      <div className="basis-1/2">Yearly Investment</div>
      <div className="basis-1/2">
        <OutlinedInput type='number' onInput={(e)=> ((parseInt(e.target.value))<150001)?setAmount(e.target.value):setAmount(150000)} value={amount} inputProps={{max: 150000,min:0}} id="standard-adornment-amount" startAdornment={<InputAdornment position='start' type='string'>₹</InputAdornment>}/>
      </div>
  </div>
  <div className='p-4'>
    <Slider value={amount} onChange={(e)=> setAmount(parseInt(e.target.value))} defaultValue={500} aria-label="Default" valueLabelDisplay="auto" min={500} max={150000} />
  </div>
  </div>
            
  )
}

export default YearlyInvesment