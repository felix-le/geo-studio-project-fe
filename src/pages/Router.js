import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from './Dashboard';
import Login from './Login';

function PublicRouter() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default PublicRouter;
