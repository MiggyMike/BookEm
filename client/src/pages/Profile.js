import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Profile = (props) => {
  console.log('profile:', props);
  return (
    <div>
      <h1>Profile</h1>
      <h4>Meet {props.currentUser.name}</h4>
      {/* need to structure this and pull by user id */}
      {/* <p>{props.services[0].service}</p> */}
      {/* <Row>
        {props.services.map((service) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{props.services.service}</h3>
          </Col>
        ))}
      </Row> */}
      {console.log('profile:', props)};
    </div>
  );
};

export default withRouter(Profile);
