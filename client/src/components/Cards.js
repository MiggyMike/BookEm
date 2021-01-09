import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default ({ service }) => {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant='top' src={service.image_url} />
      <Card.Body>
        <Card.Title>{service.service}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Card.Text>{service.duration}</Card.Text>
        <Card.Text>$ {service.price}</Card.Text>
        <Card.Text>{service.rating}</Card.Text>
        <Card.Text>{service.numReviews}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>User name</small>
      </Card.Footer>
    </Card>
  );
};
