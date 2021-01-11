import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { __RegisterUser } from '../services/UserServices';
import { Form, Button, Container } from 'react-bootstrap';

function Register(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setFormError] = useState(false);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handlePhone = ({ target }) => {
    setPhone(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formState = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };
    try {
      const register = await __RegisterUser(formState);
      props.toggleAuthenticated(true, register.user);
      props.history.push('/login');
    } catch (error) {
      //   console.log('ACCT RESP2:', error);
      setFormError(true);
    }
  };

  return (
    <div>
      <Container>
        <h1>Register</h1>

        <Form className='form-content-center' onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId='formGroupName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='John'
              name='name'
              className='form-input'
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group controlId='formGroupPhoneNumber'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='text'
              placeholder='000-000-000'
              name='phone'
              className='form-input'
              onChange={handlePhone}
            />
          </Form.Group>
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
        <Form />
      </Container>
    </div>
  );
}
export default withRouter(Register);
