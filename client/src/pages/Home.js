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
      {/* <div className="container-fluid" onClick={() => { this.myInp.focus() }}> */}
      {/* <Container className="signup"> */}
      <Row>
        <Col md={{ span: 3 }}>
          <SideNav />
        </Col>
        <Col md={{ span: 9 }}>
          <ScanJumbotron
            allUsers={props.allUsers}
            clockedInUsers={props.clockedInUsers}
            clockInFunc={props.clockInFunc}
          />
          <TableExample
            allUsers={props.allUsers}
            clockedInUsers={props.clockedInUsers}

          />
        </Col>
      </Row>
      {/* </Container> */}
    </div>

  );
}

export default Home;



{/* <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Home Page</h1>
          {isAuth ? (
            <>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  setSecret('');
                  logout();
                }}
              >
                Logout
              </Button>
              <Button
                className="m-1"
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/members");
                }}
              >
                Members
              </Button>
            </>
          ) : (
              <>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/login");
                  }}
                >
                  Login
              </Button>
                <Button
                  className="m-1"
                  onClick={e => {
                    e.preventDefault();
                    props.history.push("/signup");
                  }}
                >
                  Signup
              </Button>
              </>
            )}
          <Button
            className="m-1"
            onClick={e => {
              e.preventDefault();
              getSecret();
            }}
          >
            Show Secrets
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{secret}</h1>
        </Col>
      </Row>
    */}