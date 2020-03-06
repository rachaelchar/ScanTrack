import React from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

export default function TableExample() {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {

    Axios.get(`/api/employees`)
      .then(res => {
        setUsers(res.data);
      })
  }, [])

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
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
                  {first_name}
                </td>
                <td data-th="Last" className="align-middle">
                  {last_name}
                </td>
                <td data-th="Status" className="align-middle">
                  {working_status.status}
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
