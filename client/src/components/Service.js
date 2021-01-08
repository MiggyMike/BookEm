import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({
  props,
  service,
  description,
  image_url,
  duration,
  price,
  rating,
  numReviews,
  user_id,
}) => {
  console.log('SC:', props);

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>{service}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{duration}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{rating}</Card.Text>
            <Card.Text>{numReviews}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>User name</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
