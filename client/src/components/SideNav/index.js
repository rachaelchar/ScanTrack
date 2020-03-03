import React from "react";

import './style.css';

export default function SideNav() {

  return (
    <div className="row">
      <div className="col-3 mt-4 bg-primary" id="sideNav">

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