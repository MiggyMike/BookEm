import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardDeck,
  CardGroup,
  Row,
  Col,
  Container,
  Button,
} from 'react-bootstrap';
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
              <Col sm={3} md={4} lg={6} key={service._id}>
                <div>
                  <CardDeck>
                    <Card>
                      <div>
                        <div>
                          <h5>{service.service}</h5>
                        </div>
                      </div>
                      <Card.Img
                        src={service.image_url}
                        alt='sf'
                        style={{ objectFit: 'fill' }}
                      />

                      <Card.Body className='text-center'>
                        <Button
                          className='ml-2'
                          variant='outline-primary'
                          onClick={() =>
                            props.history.push(`/edit/${service._id}`)
                          }
                        >
                          edit
                        </Button>
                        <Button
                          className='ml-4'
                          variant='outline-danger'
                          onClick={() => deleteService(service._id)}
                        >
                          delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
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
