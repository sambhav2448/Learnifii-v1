import React, { Component } from "react";
import classes from "./sidenav.module.css";
import "./sidenav.css";
import homeimg from "../images/browser.svg";
import presimg from "../images/presentation.svg";
import {Link} from "react-router-dom";



class Sidenav extends Component{
  

    state={
      showStore:false
    }
 
  dropitemms=()=>{
      this.setState({ showStore:!this.state.showStore });
    };

    
    render(){
     return(     
            <div  className={classes.sidenav}>
              <Link to="/"><img className={classes.homeimg} src={homeimg}></img>Home</Link>
               <div onClick={this.dropitemms} class="dropdown ">
                  <div className="drpdown1  btn-sm" href="" role="button">
                  <i class="fas fa-chalkboard-teacher"></i>  Classes
                  </div>
                  </div>

                  <div className="moveaside" style={{display: this.state.showStore ? 'block' : 'none' }}>
                  <Link to="/">Draft</Link>
                  <Link to="/">Public</Link>
                  <Link to="/">Expired</Link>
                  </div>
                <Link to="/"> <img className={classes.presimg} src={presimg}></img>Services</Link>
            </div>
            
    )
  }
 

    
}

export default Sidenav;