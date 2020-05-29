import React from "react";
import logo from "../../images/learnifii-logo.jpg";
import "./nav1.css";

function nav1(){

        return(
            <nav className="d-flex justify-content-between navtop navbar navbar-expand-lg navbar navbar-dark bg-info fixed-top">
            <a  href="/"><img className="image-logo" src={logo} alt="learnifii"></img></a>
            <div>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control prplnav mr-sm-2 searchnav" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            
            </div>
            <a className="navbar-brand username-class" href="/">UserName</a>

            </nav>
        )
};

export default nav1;