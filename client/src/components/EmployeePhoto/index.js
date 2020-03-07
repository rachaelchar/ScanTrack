import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function EmployeePhoto() {
return (
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image alt="employee photo" src="holder.js/171x180" roundedCircle />
    </Col>
  </Row>
</Container>
)
}