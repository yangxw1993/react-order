import React, { Component } from 'react'
import { Tabs } from 'antd'
import styles from './index.scss'
import {Switch} from 'dva/router'
import SubRoutes, {RedirectRoute} from '../../utils/SubRoutes'
import {} from 'dva/router'

const { TabPane } = Tabs
export default class index extends Component{
  // 切换tab
  changeTab = key => {
    console.log(key,'key***',this.props);
    if(this.props.location.pathname !== key){
      this.props.history.push(key);
    }
  }
  render(){
    const {routes, app} = this.props;
    console.log(routes,'routes**')
    return (
      <div className={styles.about}>
        <Tabs className={styles.tabs} tabPosition="left" activeKey={this.props.location.pathname} onChange={this.changeTab}>
          {routes.map((route, i) => (
            <TabPane tab={route.name} key={route.path} />
          ))}
          {/* <TabPane tab="历史订餐" key="历史订餐" />
          <TabPane tab="联系我们" key="联系我们" />
          <TabPane tab="点餐文档" key="点餐文档" />
          <TabPane tab="快递信息" key="快递信息" /> */}
        </Tabs>
        <div className={styles.routes}>
          {/* 二级路由 */}
          <Switch>
            {routes.map((route, i) => (
              <SubRoutes key={i} {...route} app={app} />
            ))}
            <RedirectRoute exact={true} from={'/about'} routes={routes} />
          </Switch>
        </div>
      </div>
    )
  }
}
