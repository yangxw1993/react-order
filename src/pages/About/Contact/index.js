import React, { Component } from 'react'
import { Tabs } from 'antd'
import styles from './index.scss'
import SubRoutes from '../../../utils/SubRoutes'
const { TabPane } = Tabs
export default class index extends Component{
 render(){
  const {routes, app} = this.props;
  return (
    <div className={styles.contact}>
      <h2>联系我们</h2>
      <Tabs className={styles.tabs} tabPosition="top" key='1'>
        {routes.map((route, i) => (
          <TabPane tab={route.name} key={route.path} >
            <SubRoutes key={i} {...route} app={app} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
 }
}