import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Profile = (props) => {
  //   console.log('profile:', props);
  return (
    <div>
      <h1>Profile</h1>
      <h4>Meet {props.currentUser.name}</h4>
    </div>
  );
};

export default withRouter(Profile);
