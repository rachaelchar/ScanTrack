import React from "react";
import EmployeeRow from './EmployeeRow';

export default function EmployeeStatusTable() {

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brandon</td>
            <td>Fall</td>
            <td>Clocked-In</td>
            <td><Button variant="primary">View</Button></td>
          </tr>
          <tr>
            <td>Kyle</td>
            <td>Jones</td>
            <td>Clocked-In</td>
            <td><Button variant="primary">View</Button></td>
          </tr>
          <tr>
            <td>Marissa</td>
            <td>Fortier</td>
            <td>Clocked-In</td>
            <td><Button variant="primary">View</Button></td>
          </tr>
          <EmployeeRow />
        </tbody>
      </Table>
    </div>
  )
}