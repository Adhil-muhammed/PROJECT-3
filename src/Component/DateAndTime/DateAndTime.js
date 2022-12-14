import React from "react";
import "date-fns";
import BreackPoint from "../BtsrapBrkPoint/BreackPoint";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./DateAndTime.css";
function DateAndTime() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="dateAndTime">
      <div 
      // className=
      // "dateAndTime1"
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
<div className="ImgOverlay">
  <BreackPoint />

  {/* <button className="btnn">clikme</button> */}
</div>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}

export default DateAndTime;
