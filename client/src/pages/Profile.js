import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Accordion,
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
              <Col sm={6} md={4} lg={4} key={service._id}>
                <div>
                  <CardDeck>
                    <Card>
                      <div>
                        <div>
                          <h5 className='text-truncate'>{service.service}</h5>
                        </div>
                      </div>
                      <Card.Img
                        src={service.image_url}
                        alt='sf'
                        style={{ objectFit: 'fill' }}
                      />

                      <Accordion>
                        <Accordion.Toggle
                          as={Card.Header}
                          variant=''
                          eventKey='0'
                        >
                          <i className='fas fa-ellipsis-v'></i>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey='0'>
                          <Card.Body>
                            <Row>
                              <Col>
                                <Button
                                  className='text-left'
                                  variant='primary'
                                  onClick={() =>
                                    props.history.push(`/edit/${service._id}`)
                                  }
                                  style={{ fontSize: '1rem' }}
                                >
                                  <i class='fas fa-edit'></i>
                                </Button>
                              </Col>

                              <Col className='text-right'>
                                <Button
                                  className=' text-right'
                                  variant='danger'
                                  onClick={() => deleteService(service._id)}
                                  style={{ fontSize: '1rem' }}
                                >
                                  <i class='fas fa-trash'></i>
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Accordion>
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
