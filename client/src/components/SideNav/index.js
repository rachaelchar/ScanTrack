import React from "react";
import logo from "../../images/logo.png";

import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-12 bg-primary px-0" id="sideNav">
        <img id="logo" src={logo} />
        <hr className="mb-0"></hr>

        <div className="sidebar">
          <button href="/" className="py-3 sidelinks" id="sideButton"><i id="icon" className="fa fa-home ml-4"></i>Home</button>
          <hr className="my-0"></hr>
          <button href="/profile" className="py-3 sidelinks" id="sideButton"><i id="icon" className="fa fa-cog ml-4" aria-hidden="true"></i>View My Profile</button>
          <hr className="my-0"></hr>
          <button href="/register" className="py-3" id="sideButton"><i id="icon" className="fa fa-fw fa-user ml-4"></i>Register New Employee</button>
          <hr className="my-0"></hr>
          <button href="/print" className="py-3" id="sideButton"><i id="icon" className="fa fa-print ml-4"></i>Print Last Weeks Hours</button>
          <hr className="my-0"></hr>
        </div>
      </div>
    </div>
  )
}
