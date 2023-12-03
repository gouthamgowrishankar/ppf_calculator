import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';

const InterestRate = () => {
  return (
    <div>
    <div className="flex flex-row p-4">
      <div className="basis-1/2">Interest Rate</div>
      <div className="basis-1/2">
        <OutlinedInput disabled={true} value={7.1} id="standard-adornment-amount" type='number' inputProps={{max: 99,min:0}}/>
      </div>
  </div>
  </div>
  )
}

export default InterestRate