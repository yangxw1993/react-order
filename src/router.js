import React from 'react';
import { Router, Switch } from 'dva/router';
// import IndexPage from './pages/IndexPage';
import SubRoutes from './utils/SubRoutes'
// import Home from './pages/Home';
// import Admin from "./pages/Admin";
// import About from "./pages/About";
// import Menus from "./pages/Menus";
// import Login from "./pages/user/login";
// import Regist from "./pages/user/regist";

const RouteConfig = [
  {
    path: '/',
    // component: IndexPage,
    component: () => import('./pages/IndexPage'),
    model: [],
    routes: [
      {
        name: '主页',
        path: '/home',
        component: () => import('./pages/Home'), 
        // component: Home, 
        model: [import('./models/home')],
        redirect: true
      },
      {
        name: '菜单',
        path: '/menus',
        component: () => import('./pages/Menus'),
        // component: Menus,
        model: [],
      },
      {
        name: '管理',
        path: '/admin',
        component: () => import('./pages/Admin'),
        // component: Admin,
        model: [],
      },
      {
        name: '关于我们',
        path: '/about',
        component: () => import('./pages/About'),
        // component: About,
        model: [],
      },
      {
        name: '登录',
        path: '/login',
        component: () => import('./pages/user/login'),
        // component: Login,
        model: [],
      },
      {
        name: '注册',
        path: '/regist',
        component: () => import('./pages/user/regist'),
        // component: Regist,
        model: [],
      }
    ]
  }
]


function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {RouteConfig.map((route, i) => (
          <SubRoutes key={i} {...route} app={app} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
