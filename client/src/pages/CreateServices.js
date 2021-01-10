import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { __CreateService } from '../services/ServiceServices';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function CreateServices(props) {
  // console.log('props:', props.currentUser._id);
  const [newService, setNewService] = useState({});

  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [numReviews, setNumReviews] = useState('');
  const [setFormError] = useState(false);

  const handleService = ({ target }) => {
    setService(target.value);
  };
  const handleDescription = ({ target }) => {
    setDescription(target.value);
  };
  const handleImage = ({ target }) => {
    setImage(target.value);
  };
  const handleDuration = ({ target }) => {
    setDuration(target.value);
  };
  const handlePrice = ({ target }) => {
    setPrice(target.value);
  };
  const handleRating = ({ target }) => {
    setRating(target.value);
  };
  const handleNumReviews = ({ target }) => {
    setNumReviews(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formState = {
      service: service,
      description: description,
      image_url: image,
      duration: duration,
      price: price,
      rating: rating,
      numReviews: numReviews,
      user_id: props.currentUser._id,
      user_name: props.name,
    };
    try {
      await __CreateService(formState, props.currentUser._id);
      console.log(formState);
      props.history.push('/profile');
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Container>
        <h1>Create Service</h1>
        <Col lg={8} className='mx-auto'>
          <Form
            className='form-content-center'
            onSubmit={(e) => handleSubmit(e)}
          >
            <Form.Group controlId='formGroupName'>
              <Form.Label>Service</Form.Label>
              <Form.Control
                type='text'
                placeholder='Service Name'
                name='service'
                className='form-input'
                onChange={handleService}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                type='text'
                placeholder='Describe service'
                name='description'
                className='form-input'
                onChange={handleDescription}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                type='text'
                placeholder='paste img url/file here'
                name='image_url'
                className='form-input'
                onChange={handleImage}
              />
            </Form.Group>
            <Row className='mx-auto'>
              <Form.Group
                controlId='formGroupDuration'
                className='mr-auto w-25'
              >
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='1hr 30min'
                  name='duration'
                  className='form-input'
                  onChange={handleDuration}
                />
              </Form.Group>
              <Form.Group controlId='formGroupPrice' className='mr-auto w-25'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='00.00'
                  name='price'
                  className='form-input'
                  onChange={handlePrice}
                />
              </Form.Group>
              <Form.Group controlId='select' className='mr-auto '>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type='number'
                  min='0'
                  max='5'
                  placeholder='0'
                  name='rating'
                  className='form-input'
                  onChange={handleRating}
                />
              </Form.Group>
              <Form.Group controlId='formGroupPrice' className='mr-auto w-25'>
                <Form.Label># of Reviews</Form.Label>
                <Form.Control
                  type='number'
                  min='0'
                  placeholder='0'
                  name='reviews'
                  className='form-input'
                  onChange={handleNumReviews}
                />
              </Form.Group>
            </Row>

            <Button type='submit'>Submit</Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
}
export default withRouter(CreateServices);
