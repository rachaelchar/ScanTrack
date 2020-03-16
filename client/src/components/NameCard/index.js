import React from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

export default function NameCard(props) {

  let data = props.employeeInfo
  const history = useHistory();

  const redirect = () => {
    history.push(`/`);
  };

  return (
    <div>
      <Card className="shadow border border-secondary">
        <Card.Body>
          {props.employeeInfo !== undefined ? (
            <ul style={{ listStyleType: "none" }}>
              <li>Name: {data.first_name} {data.last_name}</li>
              <li>Position: {data.position}</li>
              {/* <li>Accrued Time: </li> */}
            </ul>
          ) : (redirect())}
        </Card.Body>
      </Card>
    </div>
  )
}