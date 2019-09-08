import React from 'react'
import {Route, Redirect} from 'dva/router'
import NoMatch from '../components/NoMatch'


// 第一种方式
// export default function SubRoutes(route) {
//   return (
//     <Route render={props => <route.component {...props} routes={route.routes} />} />
//   )
// }

// 第二种方式
export default function SubRoutes({routes, component: Comment}){
  return <Route render={props => <Comment {...props} routes={routes} />} />
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
