import React from 'react'
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const YearInput = ({year,setYear}) => {
  return (
    <div>
    <div className="flex flex-row p-4">
      <div className="basis-1/2">No.Of Years</div>
      <div className="basis-1/2">
        <OutlinedInput value={year} onInput={(e)=> (14<(parseInt(e.target.value)) && (parseInt(e.target.value))<51)?setYear(e.target.value):setYear(15)} id="standard-adornment-amount" type='number' inputProps={{max: 50,min:15}} endAdornment={<InputAdornment type='string' position='end'>Yr</InputAdornment>}/>
      </div>
  </div>
  <div className='p-4'>
    <Slider value={year} onChange={(e)=> setYear(e.target.value)} defaultValue={15} aria-label="Default" valueLabelDisplay="auto" min={15} max={50} />
  </div>
  </div>
  )
}

export default YearInput