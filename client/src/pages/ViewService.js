import React, { useState, useEffect } from 'react';
import { __GetServiceById } from '../services/ServiceServices';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const ViewService = (props) => {
  const [service, setService] = useState('');

  const getServId = async () => {
    try {
      const res = await __GetServiceById(props.match.params.service_id);
      console.log('SGNL SRV:', res.data);
      setService(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServId();
  }, []);

  console.log('SNGL SRV2:', services);
  return (
    <div>
      <h1>Service</h1>
      <p>{service.price}</p>
    </div>
  );
};

export default withRouter(ViewService);
