import * as React from "react"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"

const DateTime = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateTime
