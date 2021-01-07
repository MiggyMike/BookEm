import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { __CheckSession } from '../services/UserServices';
import Layout from './Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Router(props) {
  const [pageLoading, updatePageLoading] = useState(true);
  const [authenticated, updateAuthenticated] = useState(false);
  const [currentUser, updateUser] = useState(null);

  useEffect(() => {
    updatePageLoading(false);
    verifyTokenValid();
  }, []);

  const toggleAuthenticated = (value, user) => {
    updateAuthenticated(value);
    updateUser(user);
  };

  const verifyTokenValid = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const session = await __CheckSession();
        updateUser(session.user);
        updateAuthenticated(true);
        props.history.push(window.location.pathname);
        //^^this might not be necessary and also might cause problems
        //should test it when we test login and such
      } catch (error) {
        updateUser(null);
        updateAuthenticated(false);
        localStorage.clear();
      }
    }
  };

  return (
    <div>
      {pageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Layout
          {...props}
          currentUser={currentUser}
          authenticated={authenticated}
          toggleAuthenticated={toggleAuthenticated}
        >
          <Switch>
            <Route
              exact
              path='/'
              component={() => (
                <Home
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path='/register'
              component={() => (
                <Register
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path='/login'
              component={() => (
                <Login
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
          </Switch>
        </Layout>
      )}
    </div>
  );
}

export default withRouter(Router);
