import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className="nav-bar">
    <h5>Instagram</h5>
    <div id="nav-mobile" className="right">
     <NavLink to = "/signup" style={{textDecoration: "none"}}><span>Sign up </span></NavLink> 
     <NavLink to = "/signin" style={{textDecoration: "none"}}><span>Login in</span></NavLink> 
     
    </div>
  </div>
        
    )
}
export default Navbar;