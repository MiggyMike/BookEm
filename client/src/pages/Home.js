import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <>carasoule</>
      <>map threw of services</>
      <h1>home</h1>
      <p>
        Welcome to Book'Em! All stop shop for sharing a product or service you
        provide to allow others to book or purchase.
      </p>
      <div>
        <Button href='/register'>Register</Button>
        <Button href='/login'>Login</Button>
      </div>
    </div>
  );
}
export default withRouter(Home);
