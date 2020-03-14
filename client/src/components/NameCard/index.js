import React from 'react';
import Card from 'react-bootstrap/Card';

export default function NameCard(props) {

  const data = props.employeeInfo

  return (
    <div>
      <Card>
        <Card.Body>
          <ul style={{ listStyleType: "none" }}>
            <li>Name {data.first_name} {data.last_name}</li>
            <li>Position {data.position}</li>
            <li>Accrued Time</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  )
}