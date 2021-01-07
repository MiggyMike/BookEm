import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>
            DISHARE © 2020 Copyright Michael Jennings
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
