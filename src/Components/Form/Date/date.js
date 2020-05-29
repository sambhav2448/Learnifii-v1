import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default class PureComponent extends Component {
    state = {
      date: ""
    };
  
    handlechange=()=>{
        var lang = this.state.date;
        this.props.onSelectDate(lang);
    }

    twofunc=event=>{
        this.handlechange()
        this.setState({ date: event.target.value })

    }
    render() {
      const { value } = this.state;
      console.log(this.state.date);

      return (
        <div>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.twofunc}
    
          />
          {value}
        </div>
      );
    }
  }