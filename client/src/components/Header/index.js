import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../AuthContext";

export default function Header() {

  const { user } = useContext(AuthContext)
  console.log("current user: ", user)


  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand href="/">ScanTrack</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <AuthContext.Provider>
            <Navbar.Text>
              Signed in as: <a href="#login">{user ? user.data.first_name : 'No User Logged In'}</a>
            </Navbar.Text>
          </AuthContext.Provider>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}