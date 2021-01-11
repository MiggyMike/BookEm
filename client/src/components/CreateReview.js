import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { __CreateReview } from '../services/ReviewServices';
import { withRouter } from 'react-router-dom';

const CreateReview = (props) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleComment = ({ target }) => {
    setComment(target.value);
  };

  const handleRating = ({ target }) => {
    setRating(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      comment: comment,
      rating: rating,
      //   user_id: props.currentUser._id,
    };
    try {
      await __CreateReview(formData);
      console.log(comment);
      props.history.push('/services');
    } catch (error) {}
  };

  console.log('CS SR:', props);
  return (
    <div>
      <Container>
        <div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId='rating'>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                className='form-input'
                as='select'
                value={rating}
                name='rating'
                onChange={handleRating}
                type='number'
              >
                <option value=''>Select....</option>
                <option value='1'>1 - Poor</option>
                <option value='2'>2 - Fair</option>
                <option value='3'>3 - Good</option>
                <option value='4'>4 - Very Good</option>
                <option value='5'>5 - Excellent</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='comment'>
              <Form.Label>Comment</Form.Label>

              <Form.Control
                as='textarea'
                className='form-input'
                type='text'
                rows={3}
                name='comment'
                placeholder='Leave a review'
                onChange={handleComment}
              />
            </Form.Group>

            <Button className='btn-sm right' type='submit'>
              SUBMIT
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(CreateReview);
