import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import SubRoutes from './utils/SubRoutes'
import Home from './pages/Home';
import Admin from "./pages/Admin";
import About from "./pages/About";
import Menus from "./pages/Menus";
import Login from "./pages/user/login";
import Regist from "./pages/user/regist";

const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        name: '主页',
        path: '/home',
        // component: require('./pages/Home'), 
        component: Home, 
        redirect: true
      },
      {
        name: '菜单',
        path: '/menus',
        // component: require('./pages/Menus'),
        component: Menus,
      },
      {
        name: '管理',
        path: '/admin',
        // component: require('./pages/Admin'),
        component: Admin,
      },
      {
        name: '关于我们',
        path: '/about',
        // component: require('./pages/About'),
        component: About,
      },
      {
        name: '登录',
        path: '/login',
        // component: require('./pages/user/login'),
        component: Login,
      },
      {
        name: '注册',
        path: '/regist',
        // component: require('./pages/user/regist'),
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
