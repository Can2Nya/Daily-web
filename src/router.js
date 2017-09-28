import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import MainContainer from './routes/MainContainer';
import Registered from './routes/Registered';
/**
 * 路由配置
 * @param {app} 实例化app内容，可获取全局store
 */
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/register" component={Registered} />
    </Router>
  );
}

export default RouterConfig;
