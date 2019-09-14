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
const isLogin = true;
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
        redirect: true,
        isLogin
      },
      {
        name: '菜单',
        path: '/menus',
        component: () => import('./pages/Menus'),
        // component: Menus,
        model: [],
        isLogin
      },
      {
        name: '管理',
        path: '/admin',
        component: () => import('./pages/Admin'),
        // component: Admin,
        model: [],
        isLogin
      },
      {
        name: '关于我们',
        path: '/about',
        component: () => import('./pages/About'),
        // component: About,
        model: [],
        isLogin,
        routes: [
          {
            name: '历史订餐',
            path: '/about/order',
            model: [],
            component: () => import('./pages/About/Order')
          },
          {
            name: '联系我们',
            path: '/about/contact',
            model: [],
            component: () => import('./pages/About/Contact/'),
            routes: [
              {
                name: '联系电话',
                path: '/about/contact/phone',
                model: [],
                component: () => import('./pages/About/Contact/Phone'),
              },
              {
                name: '详情地址',
                path: '/about/contact/address',
                model: [],
                component: () => import('./pages/About/Contact/Address'),
              }
            ]
          },
          {
            name: '订餐文档',
            path: '/about/document',
            model: [],
            component: () => import('./pages/About/Document')
          },
          {
            name: '快递信息',
            path: '/about/delivery',
            model: [],
            component: () => import('./pages/About/Delivery')
          },
        ]
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
