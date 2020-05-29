import React from "react";
import classes from "./landing.module.css";
import Background from './img/bgimg.svg';
import "./landing.css";
import {Link} from "react-router-dom";

import Form from "../Form/form";
import Nav from '../Nav/navbar';
import Sidenav from '../Nav/sidenav';
import Nav1 from '../Nav/nav1/navbar';



var sectionStyle = {
    width: "90%",
    height: "90vh",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Background})`,
    backgroundPosition: "300px -6px",
    backgroundSize:"71%"
  };
  
const landing =()=>{
    return(
    
    <section className={ classes.sectionStyle }>
    
        <div className={classes.content}>
            <p className={classes.bold}>Add your class</p>
            <p className={classes.marginp}>Add a class within a few minutes by putting up class description,
            age-group, pricing and any other relevant information. 
            View it as it goes live and make edits whenever you want!!</p>
            <Link to="/addclass"><button className=" landing-button btn my-3 my-sm-0 btn-dangerr btn-large " type="submit">Add class</button></Link>
         </div>
   
      </section>
    )
}

export default landing;
