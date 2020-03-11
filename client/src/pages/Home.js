import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import Axios from "axios";
import SideNav from "../components/SideNav"
import ScanJumbotron from "../components/ScanJumbotron";
import TableExample from "../components/TableExample";

function Home(props) {

  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  // this function is duplicated in the Members page component
  // consider refactor 
  const getSecret = async () => {
    const secretResponse = await Axios.get("/api/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };

  return (
    <div className="container-fluid">
      {/* <Container className="signup"> */}
      <Row>
        <Col md={{ span: 3 }}>
          <SideNav />
        </Col>
        <Col md={{ span: 9 }}>
          <ScanJumbotron />
          <TableExample />
        </Col>
      </Row>
      {/* </Container> */}
    </div>

  );
}

export default Home;
