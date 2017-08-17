import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MainContainer from './routes/MainContainer';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      
        <Route path="/" component={IndexPage} />
      
    </Router>
  );
}

export default RouterConfig;
