import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { __CheckSession } from '../services/UserServices';
import { __GetServices } from '../services/ServiceServices';
import Layout from './Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Services from '../pages/Services';
import CreateServices from '../pages/CreateServices';
import UpdateService from '../pages/UpdateService';
import ViewService from '../pages/ViewService';
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

  const [services, setServices] = useState([]);

  const getServs = async () => {
    try {
      const res = await __GetServices();
      setServices(res);
      // console.log('SRV:', res);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getServs();
  }, []);

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
              component={(props) => <Home {...props} services={services} />}
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
                  props={props}
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              exact
              path='/services'
              component={(props) => <Services {...props} />}
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
            <Route
              path='/edit/:service_id'
              component={() => (
                <UpdateService
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path='/services/:service_id'
              component={(props) => <ViewService {...props} />}
            />
          </Switch>
        </Layout>
      )}
    </div>
  );
}

export default withRouter(Router);
