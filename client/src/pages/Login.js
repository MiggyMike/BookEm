import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { __LoginUser } from '../services/UserServices';
import { Form, Button, Container, Alert } from 'react-bootstrap';

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
        console.log('HIT SUBMIT:', email, password);
        event.preventDefault();

        try {
            const login = await __LoginUser(email, password);
            // console.log('Login:', login);
            props.toggleAuthenticated(true, login.user);
            props.history.push('/profile');
            console.log(login.user);
        } catch (error) {
            console.log('ACCT RESP2:', error);
            setFormError(true);
        }
    };

    return (
        <div>
            <Container>
                <h1>Login</h1>

                <Form
                    className='form-content-center'
                    onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formGroupEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className='form-input'
                            placeholder='Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={handleEmail}
                        />
                    </Form.Group>
                    <Form.Group controlId='formGroupPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className='form-input'
                            placeholder='Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={handlePassword}
                        />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>

                <div>
                    <Link to='/register' className='nav-active'>
                        <p>Need to Register?</p>
                    </Link>
                </div>
                {formError ? (
                    <Alert variant='danger'>Error While Logging In</Alert>
                ) : (
                    <p></p>
                )}
                <Form />
            </Container>
        </div>
    );
}
export default withRouter(Login);
