import React from 'react';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
// import RRRR from './employees/RRRR.png'

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
          props.clockedInUsers.map(({ id, first_name, last_name, code, picture_fp }) => {
            return (
              <tr key={id} onClick={() => { redirect(id) }}>
                <td>
                  <img height="42" width="42" src={`${picture_fp}`} />
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
