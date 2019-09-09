import React from 'react';
import { connect } from 'dva';
// 引入路由需要组件
import { Switch} from "dva/router";

import styles from './IndexPage.scss';
import  Navbar from './Navbar'
import { Layout } from 'antd'
import SubRoutes, {RedirectRoute ,NoMatchRoute } from '../utils/SubRoutes';
const {Header, Content} = Layout

function IndexPage(props) {
  const {routes, app} = props;
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navbar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一极路由 */}
        <Switch>
          {/* <Route path="/home" component= {Home} />
          <Route path="/menus" component= {Menus} />
          <Route path="/about" component= {About} />
          <Route path="/admin" component= {Admin} />
          <Route path="/login" component= {Login} />
          <Route path="/regist" component= {Regist} /> */}
         
          {routes.map((route, i) => (
            <SubRoutes key={i} {...route} app={app} />
          ))}
          {/* <Redirect to='/home' /> */}
          <RedirectRoute exact={true} from={'/'} routes={routes} />
          <NoMatchRoute />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
