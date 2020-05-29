import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "./date1.css"

const DateSelect=(props)=> {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange1 = (date) => {
    setSelectedDate(date);
    props.date1handle(date)

  };

  // const handleTimeChange1 = (time) => {
  //   setSelectedDate(time);
  //   this.props.handleTimeChange1(time)
  // };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-between" >
        <KeyboardDatePicker
        
          defaultValue="22/01/2019"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Session 1 start date"
          value={selectedDate}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardTimePicker
        
         variant="inline"
          margin="normal"
          id="time-picker"
          label="Session 1 start time"
          value={selectedDate}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </Grid>      
    </MuiPickersUtilsProvider>
  );
}

export default DateSelect;