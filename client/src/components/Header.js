import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = (props) => {
  console.log('header:', props);

  return (
    <header>
      {props.authenticated && props.currenterUser ? (
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand href='/'>BookIt</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link href='/' onClick={() => localStorage.clear()}>
                  Log Out
                </Nav.Link>
                <Nav.Link href='/reviews'>Reviews</Nav.Link>
                <Nav.Link href='/services'>Services</Nav.Link>
                <Nav.Link href='/profile'>Profile</Nav.Link>
                <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='/create'>
                    Post Service
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand href='/'>BookIt</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link href='/login'>Log In</Nav.Link>
                <Nav.Link href='/reviews'>Reviews</Nav.Link>
                <Nav.Link href='/'>Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default withRouter(Header);
