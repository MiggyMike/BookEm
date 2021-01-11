import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServices } from '../services/ServiceServices';
import Rating from '../components/Rating';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button,
  Card,
  CardDeck,
  Carousel,
  Container,
  Row,
  Col,
  CardGroup,
  Image,
  Spinner,
  ListGroup,
} from 'react-bootstrap';
import Loader from '../components/Loading';

function Home(props) {
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

  console.log('HM:', props);
  // console.log('HM:', services);
  return (
    <div>
      <Container>
        <h1>home</h1>
        <div>
          <Carousel fade={true}>
            <Carousel.Item>
              <Image
                fluid
                style={{ maxHeight: '400px', objectFit: 'fit' }}
                className='d-block w-100'
                src={
                  'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                }
                alt='First slide'
              />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                fluid
                style={{ objectFit: 'contain' }}
                className='d-block w-100'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Ffacebook_og_image%2Fpublic%2Ffb-meal-prep-challenge.jpg&f=1&nofb=1'
                alt='Second slide'
              />

              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                fluid
                style={{ objectFit: 'fit' }}
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGZpdG5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                alt='Third slide'
              />

              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <p>
          Welcome to Book'Em! All stop shop for sharing a product or service you
          provide to allow others to book or purchase.
        </p>

        <Row>
          <div className='mx-auto'>
            {props.authenticated && props.currentUser ? null : (
              <Card.Body>
                <Row>
                  <Col sm={6} md={6} lg={3} className='mr-auto'>
                    <LinkContainer to='/register'>
                      <Button>Register</Button>
                    </LinkContainer>
                  </Col>

                  <Col sm={6} md={6} lg={3}>
                    <LinkContainer to='/login'>
                      <Button>Login</Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </Card.Body>
            )}
          </div>
        </Row>

        <Container>
          <Row>
            {services.length ? (
              services.map((service, index) => (
                <Col sm={6} md={6} lg={3}>
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
                        <Card.Text className='text-truncate'>
                          {service.description}
                        </Card.Text>
                        <Card.Text>{service.duration}</Card.Text>
                        <Card.Text>${service.price}</Card.Text>
                        <Card.Text>
                          <small className='text-muted'>
                            {service.rating} from {service.numReviews} reveiws
                          </small>
                        </Card.Text>
                        <Card.Text>
                          <Rating
                            value={service.rating}
                            text={`${service.numReviews} reviews`}
                          />
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className='text-muted'>
                          {service.user_name}
                        </small>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
              ))
            ) : (
              <Loader />
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default withRouter(Home);
