import React from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

export default function TableExample() {

  const [users, setUsers] = React.useState([]);
  const [clockedIn, setClockedIn] = React.useState([]);

  React.useEffect(() => {

    Axios.get(`/api/employees`)
      .then(res => {
        // let filtered = res.data.filter(employee => employee.working_status_id === 1)
        // return filtered
        setUsers(res.data.filter(employee => employee.working_status_id === 1))
      })
    // .then(filtered => {
    //   console.log("test", filtered)
    // })
  }, [])

  return (

    <Table striped bordered hover size="sm">
      {console.log(users)}
      <thead>
        <tr>
          <th>#</th>
          <th>Employee</th>
          <th>Status</th>
          <th>View Profile</th>
        </tr>
      </thead>
      <tbody>
        {users[0] !== undefined ? (
          users.map(({ id, first_name, last_name, working_status }) => {
            return (
              <tr key={id}>
                <td data-th="Id" className="align-middle">
                  {id}
                </td>
                <td data-th="First" className="name-cell align-middle">
                  {first_name} {last_name}
                </td>
                <td data-th="Last" className="align-middle">
                  {working_status.status}
                </td>
                <td data-th="Status" className="align-middle">
                  {}
                </td>
              </tr>
            );
          })
        ) : (
            <></>
          )}
      </tbody>
    </Table>
  )
}
