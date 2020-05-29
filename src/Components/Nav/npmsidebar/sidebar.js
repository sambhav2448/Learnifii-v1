import { slide as Menu } from 'react-burger-menu'
import React from "react";
import "./sidebar.css";
import {Link} from "react-router-dom";


class Example extends React.Component {
    state={
        showStore:false
      }
   
    dropitemms=(event)=>{
        this.setState({ showStore:!this.state.showStore });
        event.preventDefault();
      };

  showSettings (event) {
    event.preventDefault();
  }

  render () {
   return(
    
    <Menu
        right
        width={ '70%' }
        className="displayside">
        
        
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" onClick={this.dropitemms} href="/">Classes</a>
            <div className="menu-item menuitemdrop" style={{display: this.state.showStore ? 'block' : 'none' }}>
                  <Link to="/">Draft</Link>
                  <Link to="/">Public</Link>
                  <Link to="/">Expired</Link>
                  </div>
        <a id="contact" className="menu-item" href="/">Services</a>
        
    </Menu>
      
    )
  }
}

export default Example;