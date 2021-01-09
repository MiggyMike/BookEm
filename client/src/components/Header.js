import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = (props) => {
  // console.log('header:', props.currentUser);

  return (
    <header>
      {props.authenticated && props.currentUser ? (
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>BookIt</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/'>
                  <Nav.Link onClick={() => localStorage.clear()}>
                    Log Out
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/reviews'>
                  <Nav.Link>Reviews</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/services'>
                  <Nav.Link>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/#'>
                  <Nav.Link>Books</Nav.Link>
                </LinkContainer>
                <NavDropdown title='Acct' id='basic-nav-dropdown'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/create'>
                    <NavDropdown.Item>Post Service</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/action'>
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />
                  <LinkContainer to='/#action/3.4'>
                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer href='/'>
              <Navbar.Brand>BookIt</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/reviews'>
                  <Nav.Link>Reviews</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/services'>
                  <Nav.Link>Services</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default withRouter(Header);
