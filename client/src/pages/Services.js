import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServices } from '../services/ServiceServices';
import Service from '../components/Service';
import { Container, Row, Col } from 'react-bootstrap';

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
              <Col sm={12} md={4} lg={4} xl={3}>
                <Service
                  // props={props}
                  service={service.service}
                  description={service.description}
                  image_url={service.image_url}
                  duration={service.duration}
                  price={service.price}
                  rating={service.rating}
                  numReviews={service.numReviews}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Services);

{
  /* <Card>
<a href={`/service/${service._id}`}>
  <Card.Img src={service.image} variant='top' />
</a>
</Card>
image_url={service.image_url} */
}
