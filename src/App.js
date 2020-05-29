import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form/form";
import Nav from './Components/Nav/navbar';
import Sidenav from './Components/Nav/sidenav';
import Nav1 from './Components/Nav/nav1/navbar';
import RTE from './Components/Form/rich-text/rte';
import Landing from "./Components/Landing/Landing";
import SideBar from "./Components/Nav/npmsidebar/sidebar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import landing from './Components/Landing/Landing';


class App extends Component {
 render(){
 
  return (
    <div className="App">
       {/* <Sidenav/>
        <Nav/>
        <Form/> */}
        {/* <Nav1/>
        <Sidenav/> 
        <Landing/> */}
      <Router>
         <Route exact path="/" >
                <Landing/>
                <Nav1/>
                <Sidenav/>
                <SideBar/>

          </Route>
          <Route exact path="/addclass">
              {/* <SideBar/> */}
              <Sidenav/> 
               <Nav/>
              <Form/> 
          </Route>
    </Router>
    </div>
  )
 }
}

export default App;
