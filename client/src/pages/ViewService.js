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
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { LinkContainer } from 'react-router-bootstrap';

const ViewService = (props) => {
  const [service, setService] = useState({});

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

  // console.log('SNGL SRV2:', );
  return (
    <div>
      <Container>
        {/* <h1>{service.service}</h1>
        <Rating value={service.rating} text={`${service.numReviews} reviews`} />
        <Image
          src={service.image_url}
          style={{ objectFit: 'fit' }}
          fluid
        ></Image>

        <p>{service.description}</p>

        <p>{service.duration}</p>
        <p>${service.price}</p> */}

        <Link to='/services'>
          <Button className=' btn-light my-3'>Go Back</Button>
        </Link>
        <Row>
          <Col md={6}>
            <Image
              src={service.image_url}
              alt={service.service}
              style={{ objectFit: 'fit' }}
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
                      <stong> ${service.price}</stong>
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
      </Container>
    </div>
  );
};

export default withRouter(ViewService);
