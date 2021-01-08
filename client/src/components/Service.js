import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({
  service,
  description,
  image_url,
  duration,
  price,
  rating,
  numReviews,
}) => {
  console.log('SC:');

  return (
    <CardGroup>
      <Card lg={3}>
        <Card.Img variant='top' src='{image_url}' />
        <Card.Body>
          <Card.Title> {service}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{duration}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{rating}</Card.Text>
          <Card.Text>{numReviews}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Service;
