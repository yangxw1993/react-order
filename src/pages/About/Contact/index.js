import React, { Component } from 'react'
import { Tabs } from 'antd'
import styles from './index.scss'
import {Switch} from 'dva/router'
import SubRoutes, {RedirectRoute} from '../../../utils/SubRoutes'
const { TabPane } = Tabs
export default class index extends Component{
  changeTab = key => {
    console.log(this.props,'**', key)
    if(this.props.location.pathname !== key){
      this.props.history.push(key);
    }
  }
 render(){
  const {routes, app} = this.props;
  return (
    <div className={styles.contact}>
      <h2>联系我们</h2>
      <Tabs className={styles.tabs} tabPosition="top" key='1' activeKey={this.props.location.pathname} onChange={this.changeTab}>
        {routes.map((route, i) => (
          <TabPane tab={route.name} key={route.path} />
        ))}
      </Tabs>
      <div className={styles.routes}>
        {/* 三级路由 */}
        <Switch>
          {routes.map((route, i) => (
            <SubRoutes key={i} {...route} app={app} />
          ))}
          <RedirectRoute exact={true} from={'/about/contact/'} routes={routes} />
        </Switch>
      </div>
    </div>
  )
 }
}