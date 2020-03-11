import React from 'react';
import Button from 'react-bootstrap/Button';

export default function TimeOffButton() {
return (
  <div>
{/* <ButtonGroup aria-label="Basic example">
  <Button id="profile-button" variant="secondary">Request Time Off</Button>
  <Button id="profile-button" variant="secondary">View Pay Periods</Button>
</ButtonGroup> */}
  <Button variant="primary" size="lg" block>
    Request Time Off
  </Button>
</div>
)
}