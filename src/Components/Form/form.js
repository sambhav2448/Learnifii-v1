import React, { Component } from "react";
import axios from "axios";
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "./Date/date.css";
import Texteditor from "./rich-text/rte";
import "./form.css";
import Mediaput from "../media/imageput";
import {Link} from "react-router-dom";
import Selectdate from "../date-time/date/date1";
import Selectdate2 from "../date-time/date/date2";







class Form extends Component{
    
        state={
            name:null,
            description:null,
            minage:null,
            maxage:null,
            capacity:null,
            venue:null,
            area:null,
            city:null,
            session:null,
            price:null,
            question:null,
            answer:null,
            startdate:null,
            enddate:null
        }
        
        handleChange=(e)=>{
            this.setState({
                [e.target.id]:e.target.value
            })
        }

        rtehandle=(desc)=>{
            // console.log(desc);
            this.setState({description:desc})
            console.log(this.state)
        }

        handleSubmit=(e)=>{
            e.preventDefault();
            console.log(this.state);
           const fdata= {
                name : this.state.name,
                description : this.state.description,
                category: "STEM",
                minAge: this.state.minage,
                maxAge: this.state.maxage,
                capacity: this.state.capacity,
                venue: this.state.venue,
                startTime: this.state.date,
                endTime: "2019-12-20 12:00:00",
                slotDuration: 40,
                slotDurationType: "Minutes",
                price: 5000,
                durationType: "Weekly"
            }
            const data={
                Name: this.state.name,
                Age: this.state.age,
                Date:this.state.date,
                Capacity:this.state.capacity
            }
            var myJSON = JSON.stringify(data);

      axios.post('https://learnifii-web.herokuapp.com/tasks/err',fdata)
      .then((response) => {
        console.log(response);
        alert("Your details have been Submitted!")
      })
      .catch((error) => {
        alert(error);
        console.log(error);
    })
        }
        handledate1=(date1)=>{
            this.setState({startdate:date1});
            console.log("value of start date changed");
        }

        handledate2=(date2)=>{
            this.setState({enddate:date2});
            console.log("value of end date changed");
        }
  

    render(){
            
    return(
        <main className=" container form-input form-group">
                <div className="cover">
                    <form className="grey-text" onSubmit={this.handleSubmit}>
                        <div className="formflex">
                            <div className="onestate">
                                <h6><Link to="/" className="go-back"><i class="fas fa-chevron-left"></i> Classes</Link></h6>         
                                <h3>Add Class</h3>
                            </div>
                            <div className="tableone mt-5">
                                <TextField id="name" fullWidth="true" size="small" label="Class title" variant="outlined" onChange={this.handleChange} value={this.state.name}/>
                                <Texteditor placeholder="add description" onChange={this.rtehandle}/>
                            </div>

                            <div className="tableone mt-5">
                                <TextField id="minage" type="number" fullWidth="true" size="small" label="Min-age" variant="outlined" onChange={this.handleChange} value={this.state.minage}/>
                                    <br></br>  
                                    <br></br>                  
                                <TextField id="maxage" type="number" fullWidth="true" size="small" label="Max-age" variant="outlined" onChange={this.handleChange} value={this.state.maxage}/>
                                    <br></br>
                                    <br></br>
                                <TextField id="capacity" type="number" fullWidth="true" size="small" label="Capacity" variant="outlined" onChange={this.handleChange} value={this.state.capacity}/>
                            </div>

                            <div className="tableone mt-5">
                                <TextField id="venue" fullWidth="true" size="small" label="Venue" variant="outlined" onChange={this.handleChange} value={this.state.venue}/>
                                        <br></br>
                                        <br></br>
                                <TextField id="area" fullWidth="true" size="small" label="Area" variant="outlined" onChange={this.handleChange} value={this.state.area}/>
                                        <br></br>
                                        <br></br>
                                <TextField id="city" fullWidth="true" size="small" label="City" variant="outlined" onChange={this.handleChange} value={this.state.city}/>                                   
                            </div>

                            <div className="tableone mt-5">
                                <Mediaput/>
                            </div>

                            <div className="tableone mt-5">
                                <TextField id="session" fullWidth="true" type="number" size="small" label="Number of session" variant="outlined" onChange={this.handleChange} value={this.state.session}/>
                                        <br></br>
                                        <br></br>
                                <Selectdate
                                    date1handle={this.handledate1}
                                />
                                <Selectdate2
                                    date2handle={this.handledate2}
                                />

                                
                                        <br></br>
                                        <br></br>
                                
                                <TextField id="price" fullWidth="true" type="number" size="small" label="Price per session" variant="outlined" onChange={this.handleChange} value={this.state.price}/>                                   
                            </div>

                            <div className="tableone mt-5">
                            <TextField
                                        id="question"
                                        label="Add Question"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth="true"
                                        onChange={this.handleChange} 
                                        value={this.state.question}
                                        />
                                <br></br>
                                <br></br>
                                <TextField
                                        id="answer"
                                        label="Add Answer"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth="true"
                                        onChange={this.handleChange}
                                        value={this.state.answer}
                                        />
                                        
                            </div>
                            
                            <button className="btn btn-block btn-lmao btn-info my-5">Submit</button>
                    </div>
                </form>
            </div>
        </main>



        )
    }
}

export default Form;


