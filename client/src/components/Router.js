import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { __CheckSession } from '../services/UserServices';
import Layout from './Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Services from '../pages/Services';
import CreateServices from '../pages/CreateServices';

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
                  {...props}
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
            <Route
              path='/profile'
              component={() => (
                <Profile
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path='/services'
              component={() => (
                <Services
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path='/create'
              component={() => (
                <CreateServices
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
