import React from "react";
import logo from "../../images/logo.png";


import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-12 bg-primary" id="sideNav">
        <img id="logo" src={logo} />
        <hr></hr>

        <div class="sidebar">
          <a href="home"><i id="icon" className="fa fa-home"></i>Home</a>
          <hr></hr>
          <a href="services"><i id="icon" className="fa fa-cog" aria-hidden="true"></i>View My Profile</a>
          <hr></hr>
          <a href="clients"><i id="icon" className="fa fa-fw fa-user"></i>Register New Employee</a>
          <hr></hr>
          <a href="contact"><i id="icon" className="fa fa-print"></i>Print Last Weeks Hours</a>
        </div>
      </div>
    </div>
  )
}