import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServices } from '../services/ServiceServices';

import {
  Button,
  Card,
  CardDeck,
  Carousel,
  Container,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';

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

  console.log('HM:', services);
  return (
    <div>
      <Container>
        <h1>home</h1>
        <div>
          <Carousel fade='true'>
            <Carousel.Item>
              <img
                style={{ height: '450px' }}
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
              <img
                style={{ height: '450px' }}
                className='d-block w-100'
                src='https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lYWwlMjBwcmVwfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60'
                alt='Second slide'
              />

              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '450px' }}
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
        <Container>
          <Row>
            {services.length &&
              services.map((service, index) => (
                <CardGroup>
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant='top' src={service.image_url} />
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

        <div>
          {!props.authenticaded && props.currentUser ? null : (
            <div>
              <Button href='/register'>Register</Button>
              <Button href='/login'>Login</Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
export default withRouter(Home);
