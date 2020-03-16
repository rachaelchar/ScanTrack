import React, { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../images/logo.png";
import { AuthContext } from "../../AuthContext";
import Axios from 'axios'

import './style.css';

export default function SideNav() {
  const { isAuth, logout, checkAuth, checkAdminStatus, user, isAdmin } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    checkAdminStatus()
  }, [user]);

  const Home = () => {
    history.push(`/`);
  };

  const Profile = () => {

    if (user !== undefined) {
      Axios.get(`api/employees/?code=${user.data.code}`)
        .then(response => {
          if (response.data !== undefined && response.data !== "" && response.data !== null) {
            const id = response.data.id
            history.push(`/profile/${id}`);
          }
        })
    }
    else {
      history.push(`/profile`);
    }

  };

  const Register = () => {
    history.push(`/register`);
  };

  const Print = () => {
    if (user !== undefined) {
      Axios.get(`api/employees/?code=${user.data.code}`)
        .then(response => {
          console.log(response.data.admin)
          if (response.data.admin === true) {
            history.push(`/print`);
          }
          else {
            alert("Access Restricted to Admins Only!")
          }
        })
    }
    else {
      history.push(`/profile`);
    }
  };

  return (
    <div className="row">
      <div className="col-12 bg-primary px-0" id="sideNav">
        <img id="logo" src={logo} />
        <hr className="mb-0"></hr>

        <div className="sidebar">
          <hr className="my-0"></hr>
          <button onClick={() => { Home() }} className="py-3 sidelinks" id="sideButton"><i id="icon" className="fa fa-home ml-4"></i>Home</button>
          <hr className="my-0"></hr>
          <button onClick={() => { Profile() }} className="py-3 sidelinks" id="sideButton"><i id="icon" className="fa fa-cog ml-4" aria-hidden="true"></i>View My Profile</button>
          <hr className="my-0"></hr>
          <button onClick={() => { Register() }} className="py-3" id="sideButton"><i id="icon" className="fa fa-fw fa-user ml-4"></i>Register New Employee</button>
          <hr className="my-0"></hr>
          <button onClick={() => { Print() }} className="py-3" id="sideButton"><i id="icon" className="fa fa-print ml-4"></i>Print Last Weeks Hours</button>
          <hr className="my-0"></hr>
        </div>
      </div>
    </div>
  )
}
