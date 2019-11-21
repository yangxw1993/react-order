import React from 'react'
import {Route, Redirect} from 'dva/router'
import dynamic from 'dva/dynamic';
import { connect }from 'dva'
import NoMatch from '../components/NoMatch'

// 动态加载路由组件
const dynamicCom = (app,models, component, routes, isLogin, userInfo) =>
  dynamic({
  app,
  models: () => models,
  component: () => component().then(res => {
    // 判断是否需要登录
    if(isLogin){
      // 判断是否登录
      if(!localStorage.username){
        return () => <Redirect to="/login" />
      }
    }
    const Component = res.default || res;
    return props => <Component {...props} app={app} routes={routes} />
  }),
});

// 第一种方式
// export default function SubRoutes(route) {
//   return (
//     <Route render={props => <route.component {...props} routes={route.routes} />} />
//   )
// }

// 第二种方式
function SubRoutes({routes, component, app, model, isLogin, userInfo}){
  return <Route component={dynamicCom(app, model, component, routes, isLogin, userInfo)} />
}

// 重定向封装
export function RedirectRoute({routes, from, exact}){
  const routeR = routes.filter(item => item.reirect);
  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />
}

// 404组件封装
export function NoMatchRoute({status = 404}){
  return <Route render={props => <NoMatch {...props} status={status} />} />
}

export default connect(({global}) => ({
  userInfo: global.userInfo
}))(SubRoutes)
