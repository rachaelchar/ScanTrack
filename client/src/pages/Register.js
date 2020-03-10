import React from 'react'
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

function Register(props) {
  return (
    <Container className="signup">
    <Header />
    <SideNav />
      {/* <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <SignupForm {...props} />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Register;
