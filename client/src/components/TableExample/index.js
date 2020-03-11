import React from 'react';
import Table from 'react-bootstrap/Table';
// import Axios from 'axios';

export default function TableExample(props) {

  // const [users, setUsers] = React.useState([]);
  // const [clockedIn, setClockedIn] = React.useState([]);

  // React.useEffect(() => {
  //   Axios.get(`/api/employees`)
  //     .then(res => {
  //       setUsers(res.data.filter(employee => employee.working_status_id === 1))
  //     })
  // }, [])

  return (

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Employee</th>
          <th>View Profile</th>
        </tr>
      </thead>
      <tbody>
        {props.clockedInUsers[0] !== undefined ? (
          props.clockedInUsers.map(({ id, first_name, last_name, working_status }) => {
            return (
              <tr key={id}>
                <td>
                  <img height="42" width="42" src="https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
                </td>
                <td data-th="First" className="name-cell align-middle">
                  {first_name} {last_name}
                </td>
                <td data-th="Status" className="align-middle">
                  <button>View Profile</button>
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
