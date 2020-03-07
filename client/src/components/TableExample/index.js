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
          <th>Profile Picture</th>
          <th>Employee</th>
          <th>View Profile</th>
        </tr>
      </thead>
      <tbody>
        {users[0] !== undefined ? (
          users.map(({ id, first_name, last_name, working_status }) => {
            return (
              <tr key={id}>
                <td>
                  <img height="42" width="42" src="https://lh3.googleusercontent.com/proxy/e8bkuSXslb3PexchY7x2iBygxiO7nv-GoMFtBOrw3vbeo5_lroQHzH7IwjBc_DwFnns1cq2NzxHQxhgNp1_cu215VARAqJeSodBJ-qFCFJIGI7MrMBxB8HoOmFPbsCJz_FDPtXIssWNAiWwr4DHM_j6CC9Fpj0fyH4MukRpX4At_YM311PO2A5sLFRFBOIA" />
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
