import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "./date2.css"

const DateSelect2=(props)=> {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  

  const handleDateChange2 = (date) => {
    setSelectedDate(date);
    props.date2handle(date)

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-between" >
        <KeyboardDatePicker
        
          defaultDate="22/22/2222"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Session 1 end date"
          value={selectedDate}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardTimePicker
         variant="inline"
          margin="normal"
          id="time-picker"
          label="Session 1 end time"
          value={selectedDate}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </Grid>      
    </MuiPickersUtilsProvider>
  );
}

export default DateSelect2;