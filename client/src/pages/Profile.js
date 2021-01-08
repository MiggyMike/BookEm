import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { __GetProfile } from '../services/UserServices';
import { __DeleteService } from '../services/ServiceServices';

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

  const deleteService = async (id) => {
    try {
      const res = services.filter((service) => service._id !== id);
      setServices(res.services);
      await __DeleteService(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h1>Profile</h1>
        <h4>Welcome to your profile</h4>
        <Row>
          {services.length ? (
            services.map((service) => (
              <Col sm={3} md={4} lg={6}>
                <div key={service._id}>
                  <Card>
                    <div>
                      <div>
                        <h3>{service.service}</h3>
                      </div>
                    </div>
                    <img src={service.image_url} alt='sf' />

                    <Card.Body>
                      <Button
                        onClick={() =>
                          props.history.push(`/edit/${service._id}`)
                        }
                      >
                        edit
                      </Button>
                      <Button onClick={() => deleteService(service._id)}>
                        delete
                      </Button>
                    </Card.Body>
                  </Card>
                  <div>
                    <Button>Edit</Button>
                    <Button onClick={() => this.deleteservice(service._id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div className='span message'>No Services Available</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Profile);
