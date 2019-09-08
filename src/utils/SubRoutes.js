import React from 'react'
import {Route} from 'dva/router'


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
