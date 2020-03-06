import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import Axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../App.css";

const Profile = props => {
  // Destructure the logout function from AuthContext
  const { logout } = useContext(AuthContext);

  // The secret is just something to demonstrate a placeholder authenticated
  // api route.
  const [secret, setSecret] = useState("");
  const [employee, setEmployee]

  // this function is duplicated in the Home page component
  // consider refactor
  const getEmployees = async () => {
    // Need to set scan input to 'code' variable in the below route
    const response = await Axios.get(`/api/employees/?code=${code}`);
    setEmployee(response.data);
  };

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Profile Page</h1>
          <Button
            className="m-1"
            onClick={() => {
              logout();
              setSecret("");
            }}
          >
            Logout
          </Button>
          <Button
            className="m-1"
            onClick={() => {
              props.history.push("/");
            }}
          >
            Home
          </Button>
          <Button className="m-1" onClick={getEmployees}>
            Show Employees
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{secret}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
