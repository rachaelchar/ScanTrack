import React from "react";
import logo from "../../images/logo.png";

import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-12 bg-primary" id="sideNav">
        <img id="logo" src={logo} />

        <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>

        <ul id="myMenu">
          <li><a href="#">Home</a></li>
          <li><a href="#">View My Profile</a></li>
          <li><a href="#">Register New Employee</a></li>
          <li><a href="#">Print Last Weeks Hours</a></li>
        </ul>
      </div>
    </div>
  )
}