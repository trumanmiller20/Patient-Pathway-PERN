import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const DateTime = () => {
  return (
    <div className="datetimepicker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
    </div>
  )
}

export default DateTime
