import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../index.css';

const Layout = (props) => {
  return (
    <div>
      <Header
        {...props}
        authenticated={props.authenticated}
        currentUser={props.currentUser}
        toggleAuthenticated={props.toggleAuthenticated}
      />
      {props.children}

      <Footer />
    </div>
  );
};

export default withRouter(Layout);
