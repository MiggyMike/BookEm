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
import Loader from '../components/Loading';

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
          {service.reviews.length ? (
            service.reviews.map((review) => (
              <Col md={6} key={review._id}>
                <h2>Reviews</h2>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <strong>{review.user_id.name}</strong>
                    <Row>
                      <Col>
                        <div>{review.comment}</div>
                      </Col>
                      <Rating value={review.rating} />
                    </Row>
                    <div>
                      <small className='text-muted'>
                        {review.createdAt.substring(0, 10)}
                      </small>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            ))
          ) : (
            <Col md={6}>
              <h2>Reviews</h2>
              <ListGroup variant='flush'>
                <Alert variant='warning'>No comments</Alert>
              </ListGroup>
            </Col>
          )}
          <Col>
            <ListGroup>
              <ListGroup.Item>
                <h2>Write Review</h2>
                {props.currentUser !== null &&
                props.currentUser !== undefined ? (
                  <CreateReview
                    {...props}
                    rating={rating}
                    currentUser={props.currentUser}
                    service={service}
                  />
                ) : (
                  <p>
                    Please <Link to='/login'>login</Link> or
                    <Link to='/register'>register</Link> to leave a comment
                  </p>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(ViewService);
