import React, { useState, useEffect } from 'react';
import { __GetServiceById } from '../services/ServiceServices';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

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
        <h1>{service.service}</h1>
        <Rating value={service.rating} text={`${service.numReviews} reviews`} />
        <Image
          src={service.image_url}
          style={{ objectFit: 'fit' }}
          fluid
        ></Image>

        <p>{service.description}</p>

        <p>{service.duration}</p>
        <p>${service.price}</p>
      </Container>
    </div>
  );
};

export default withRouter(ViewService);
