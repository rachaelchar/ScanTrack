import React from "react";
import logo from "../../images/logo.png";

import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-12 bg-primary" id="sideNav">
        <img id="logo" src={logo} />
        <hr></hr>

        <div class="sidebar text-center">
          <a href="home"><i class="fa fa-fw fa-home"></i> Home</a>
          <a href="services"><i class="fa fa-fw fa-wrench"></i> View My Profile</a>
          <a href="clients"><i class="fa fa-fw fa-user"></i> Register New Employee</a>
          <a href="contact"><i class="fa fa-fw fa-envelope"></i> Print Last Weeks Hours</a>
        </div>
      </div>
    </div>
  )
}