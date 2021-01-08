import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { __GetProfile } from '../services/UserServices';

const Profile = (props) => {
  console.log('profile:', props);

  const [services, setServices] = useState([]);

  const getUserServs = async () => {
    try {
      const res = await __GetProfile(props.currentUser._id);
      setServices(res.services);
      console.log('PRF:', res.services);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUserServs();
  }, []);

  return (
    <div>
      <Container>
        <h1>Profile</h1>
        <h4>Welcome to your profile</h4>
        {/* <p>{props.services[2].price}</p> */}
        {/* need to structure this and pull by user id */}
        {/* <p>{props.services[0].service}</p> */}
        <Row>
          {services.length ? (
            <div>
              {services.map((service) => (
                <div key={service._id}>
                  <Card style={{ width: '15rem' }}>
                    <div>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                    <img src={service.image_url} alt='sf' />
                  </Card>
                  <div>
                    <button>Edit</button>
                    <button onClick={() => this.deleteservice(service._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='span message'>No Services Available</div>
          )}
        </Row>
        {/* <Row>
        {service.length &&
          props.services.map((service) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>{props.services.service}</h3>
            </Col>
          ))}
      </Row> */}
      </Container>
    </div>
  );
};

export default withRouter(Profile);
