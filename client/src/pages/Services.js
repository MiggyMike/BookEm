import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServices } from '../services/ServiceServices';
import Service from '../components/Service';
import {
  Card,
  CardDeck,
  CardGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Rating from '../components/Rating';
const Services = (props) => {
  // console.log('SRV:', props);
  const [services, setServices] = useState([]);

  const getServs = async () => {
    try {
      const res = await __GetServices();
      setServices(res);
      // console.log('SRV:', res);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getServs();
  }, []);

  console.log('SRV2:', services);
  return (
    <div>
      <Container>
        <h1>Services</h1>
        <Row>
          {services.length &&
            services.map((service, index) => (
              <Col sm={6} md={6} lg={3} key={service._id}>
                <CardGroup>
                  <Card>
                    <Card.Img
                      variant='top'
                      src={service.image_url}
                      onClick={() =>
                        props.history.push(`/services/${service._id}`)
                      }
                    />
                    <Card.Body>
                      <Card.Title>{service.service}</Card.Title>
                      <Card.Text
                        className='text-truncate'
                        style={{ wordWrap: 'normal' }}
                      >
                        {service.description}
                      </Card.Text>
                      <Row>
                        <Col className='text-left'>
                          <Card.Text>{service.duration}</Card.Text>
                        </Col>
                        <Col className='text-right'>
                          <Card.Text>${service.price}</Card.Text>
                        </Col>
                      </Row>

                      <Card.Text>
                        <Rating
                          value={service.rating}
                          text={`${service.numReviews} reviews`}
                        />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className='text-muted'>
                        {service.user_id.name}
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Services);
