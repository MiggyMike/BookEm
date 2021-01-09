import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { __GetServiceById, __UpdateService } from '../services/ServiceServices';
import { Button, Container, Form } from 'react-bootstrap';

function UpdateService(props) {
  const [services, updateServices] = useState([]);

  const getService = async () => {
    try {
      const service = await __GetServiceById(
        props.match.params.service_id,
        services
      );
      updateServices({
        service: service.service,
        description: service.description,
        image_url: service.image_url,
        duration: service.duration,
        price: service.price,
        rating: service.rating,
        numReviews: service.numReviews,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  const handleChange = ({ target }) => {
    updateServices({ [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UpdateService(services, props.match.params.service_id);
      props.history.push('/profile/:user_id');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h1>Update Service</h1>

        <Form className='form-content-center' onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId='formGroupName'>
            <Form.Label>Service</Form.Label>
            <Form.Control
              type='text'
              placeholder='Service Name'
              name='service'
              className='form-input'
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='formGroupDuration'>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type='text'
              placeholder='1hr 30min'
              name='duration'
              className='form-input'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPrice'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='text'
              placeholder='00.00'
              name='price'
              className='form-input'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPrice'>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type='text'
              placeholder='0'
              name='rating'
              className='form-input'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPrice'>
            <Form.Label># of Reviews</Form.Label>
            <Form.Control
              type='text'
              placeholder='0'
              name='reviews'
              className='form-input'
              onChange={handleChange}
            />
          </Form.Group>
          <div className='text-center'>
            <Button className='' type='submit'>
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default withRouter(UpdateService);
