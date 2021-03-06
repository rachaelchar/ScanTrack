import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../AuthContext";
import "./style.css";

export default function Header() {

  const { user, logout } = useContext(AuthContext)

  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand href="/">ScanTrack</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <AuthContext.Provider>
            <Navbar.Text >
              {user ?
                <a onClick={logout} href="/login" className="signout-text">{`Sign Out: ${user.data.first_name}`}</a>
                :
                <a href="/login">{`Sign In`}</a>
              }
            </Navbar.Text>
          </AuthContext.Provider>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}