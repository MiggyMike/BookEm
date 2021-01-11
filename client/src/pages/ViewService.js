import React, { useState, useEffect } from 'react';
import { __GetServiceById } from '../services/ServiceServices';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroup,
  Alert,
  Form,
  FormLabel,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { LinkContainer } from 'react-router-bootstrap';
import CreateReview from '../components/CreateReview';
import Login from './Login';
import Services from './Services';

const ViewService = (props) => {
  const [service, setService] = useState({});
  const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');

  const getServId = async () => {
    try {
      const res = await __GetServiceById(props.match.params.service_id);
      console.log('SGNL SRV:', res);
      setService(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServId();
  }, []);

  console.log('SNGL SRV2:', service.reviews);
  return (
    <div>
      <Container>
        <Link to='/services'>
          <Button className=' btn-light my-3'>Go Back</Button>
        </Link>
        <Row>
          <Col md={6}>
            <Image
              src={service.image_url}
              alt={service.service}
              // style={{ objectFit: 'fit' }}
              fluid
            ></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{service.service}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={service.rating}
                  text={`${service.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${service.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {service.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong> ${service.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block' type='button'>
                    Book
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h2>Reviews</h2>
            <ListGroup variant='flush'>
              {service.reviews ? (
                service.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.user_id.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))
              ) : (
                <Alert variant='warning'>No comments</Alert>
              )}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <h2>Write Review</h2>
                <CreateReview
                  {...props}
                  rating={rating}
                  service_id={service._id}
                  currentUser={props.currentUser}
                />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(ViewService);
