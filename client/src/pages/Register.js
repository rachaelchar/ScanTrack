import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import RegisterForm from '../components/RegisterForm';

function Register(props) {
  return (
    <div>
      <Container className="signup, container-fluid" />
      <div className="row">
        <div className="col-3">
          <SideNav />
        </div>
        <div className="col-9">
          <h1 className="mt-3 mb-3">Register New Employee</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
export default Register;

