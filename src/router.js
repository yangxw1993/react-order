import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
 import Home from "./pages/Home";
 import Menus from "./pages/Menus";
 import Admin from "./pages/Admin";
 import About from "./pages/About";
 import Login from "./pages/user/login";
 import Regist from "./pages/user/regist";
 import SubRoutes from './utils/SubRoutes'

const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/home',
        component: Home, 
        redirect: true
      },
      {
        path: '/menus',
        component: Menus,
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/regist',
        component: Regist,
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
