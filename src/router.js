import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import SubRoutes from './utils/SubRoutes'

const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/home',
        component: require('./pages/Home'), 
        redirect: true
      },
      {
        path: '/menus',
        component: require('./pages/Menus'),
      },
      {
        path: '/admin',
        component: require('./pages/Admin'),
      },
      {
        path: '/about',
        component: require('./pages/About'),
      },
      {
        path: '/login',
        component: require('./pages/user/login'),
      },
      {
        path: '/regist',
        component: require('./pages/user/regist'),
      }
    ]
  }
]


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {RouteConfig.map((route, i) => (
          <SubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
