import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { __LoginUser } from '../services/UserServices';
import { Form, Button, Container } from 'react-bootstrap';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    setFormError(false);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    setFormError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formState = {
      email: email,
      password: password,
    };
    try {
      const login = await __LoginUser(formState);
      props.toggleAuthenticated(true, login.user);
      props.history.push('/profile');
    } catch (error) {
      //   console.log('ACCT RESP2:', error);
      setFormError(true);
    }
  };

  return (
    <div>
      <Container>
        <h1>Login</h1>

        <Form className='form-content-center' onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              className='form-input'
              onChange={handleEmail}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              className='form-input'
              onChange={handlePassword}
            />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>

        <div>
          <Link to='/login' className='nav-active'>
            <p>Have an account?</p>
          </Link>
        </div>
        {formError ? <p>Error While Logging In</p> : <p></p>}
        <Form />
      </Container>
    </div>
  );
}
export default withRouter(Login);
