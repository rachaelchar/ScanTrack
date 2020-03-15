import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function EmployeePhoto(props) {
  var divStyle = {
    width: '300px',
    height: '300px'
  };


  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image alt="employee photo" style={divStyle} src={`${props.employeeInfo.picture_fp}`} roundedCircle />

        </Col>
      </Row>
    </Container>
  )
}