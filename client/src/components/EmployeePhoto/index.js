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
          <Image alt="employee photo" src="https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
  )
}