import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServices } from '../services/ServiceServices';
import Service from '../components/Service';
import { Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
  // console.log('SRV:', props);
  const [services, setServices] = useState([]);

  const getServs = async () => {
    try {
      const res = await __GetServices();
      setServices(res);
      console.log('SRV:', res);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getServs();
  }, []);

  console.log('SRV2:', props);
  return (
    <div>
      <Container>
        <h1>Services</h1>
        <Row>
          {services.length &&
            services.map((service, index) => (
              <CardGroup key={service._id}>
                <Card style={{ width: '15rem' }}>
                  <Card.Img
                    variant='top'
                    src={service.image_url}
                    onClick={() =>
                      props.history.push(`/services/${service._id}`)
                    }
                  />
                  <Card.Body>
                    <Card.Title>{service.service}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Card.Text>{service.duration}</Card.Text>
                    <Card.Text>{service.price}</Card.Text>
                    <Card.Text>{service.rating}</Card.Text>
                    <Card.Text>{service.numReviews}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className='text-muted'>User name</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Services);
