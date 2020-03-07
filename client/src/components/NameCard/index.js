import React from 'react';
import Card from 'react-bootstrap/Card';

export default function NameCard() {
  return (
    <div>
      <Card>
        <Card.Body>
          <ul style={{ listStyleType: "none" }}>
            <li>Name</li>
            <li>Position</li>
            <li>Accrued Time</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  )
}