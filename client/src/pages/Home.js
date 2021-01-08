import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import Services from './Services';

function Home(props) {
  console.log('HM:', props);
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
        {!props.authenticaded && props.currentUser ? null : (
          <div>
            <Button href='/register'>Register</Button>
            <Button href='/login'>Login</Button>
          </div>
        )}
      </div>
      {/* also want to map some services here */}
      {/* <div>
        <h2> Services</h2>
        <Services />
      </div> */}
    </div>
  );
}
export default withRouter(Home);
