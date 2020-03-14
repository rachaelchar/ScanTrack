import React from 'react';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function TableExample(props) {

  const history = useHistory();

  const redirect = (id) => {
    history.push(`/Profile/${id}`);
  };

  return (

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Employee</th>
        </tr>
      </thead>
      <tbody>
        {props.clockedInUsers[0] !== undefined ? (
          props.clockedInUsers.map(({ id, first_name, last_name }) => {
            return (
              <tr key={id} onClick={() => { redirect(id) }}>
                <td>
                  <img height="42" width="42" src="https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
                </td>
                <td data-th="First" className="name-cell align-middle">
                  {first_name} {last_name}
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
