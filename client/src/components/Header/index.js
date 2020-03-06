import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {

  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand href="/">ScanTrack</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Name</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}