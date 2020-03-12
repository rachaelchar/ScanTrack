import React from "react";
import logo from "../../images/logo.png";


import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-12 bg-primary px-0" id="sideNav">
        <img id="logo" src={logo} />
        <hr className="mb-0"></hr>

        <div class="sidebar">
          <a href="/home" className="py-3"><i id="icon" className="fa fa-home ml-4"></i>Home</a>
          <hr className="my-0"></hr>
          <a href="/profile" className="py-3"><i id="icon" className="fa fa-cog ml-4" aria-hidden="true"></i>View My Profile</a>
          <hr className="my-0"></hr>
          <a href="clients" className="py-3"><i id="icon" className="fa fa-fw fa-user ml-4"></i>Register New Employee</a>
          <hr className="my-0"></hr>
          <a href="contact" className="py-3"><i id="icon" className="fa fa-print ml-4"></i>Print Last Weeks Hours</a>
          <hr className="my-0"></hr>
        </div>
      </div>
    </div>
  )
}