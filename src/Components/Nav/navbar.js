import React from "react";
import "./navbar.css";
import logo from "../images/learnifii-logo.jpg";


function nav(){

        return(
            <nav className="d-flex justify-content-between navtop navbar navbar-expand-lg navbar navva fixed-top">
            <a className="navbar-brand" href="/"><img className="image-logo" src={logo} alt="learnifii"></img></a>
            <div>
            <button className="btn btn-outline-lightt mx-3 my-2 my-sm-0" type="submit">Discard</button>    
             <button className="btn my-2 my-sm-0 btn-outline-orangee" type="submit">Save</button>
             </div>
            </nav>
        )
};

export default nav;