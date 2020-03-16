import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function ProfileHoursTable() {

  React.useEffect(() => {
    axios.get(`/api/clockins`)
      .then(res => {
        console.log(res)
      })
  }, [])

  return (

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Standard Hours</th>
          <th>Overtime Hours</th>
          <th>Vacation Hours</th>
          <th>Sick Hours</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.clockedInUsers[0] !== undefined ? (
          props.clockedInUsers.map(({ id, first_name, last_name, code, picture_fp }) => {
            return (
              <tr key={id}>
                <td data-th="First" className="name-cell align-middle">
                  {first_name}
                </td>
                <td data-th="Last" className="name-cell align-middle">
                  {last_name}
                </td>
                <td data-th="Hours" className="name-cell align-middle">
                  {hours}
                </td>
                <td data-th="OT" className="name-cell align-middle">
                  {ot}
                </td>
                <td data-th="Vacation" className="name-cell align-middle">
                  {vacation}
                </td>
                <td data-th="Sick" className="name-cell align-middle">
                  {sick}
                </td>
              </tr>
            );
          })
        ) : (
            <></>
          )} */}
      </tbody>
    </Table>
  )
}
