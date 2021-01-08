import React from 'react';
import Router from './components/Router';
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default withRouter(App);
