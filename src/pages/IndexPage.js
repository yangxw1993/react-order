import React from 'react';
import { connect } from 'dva';
// 引入路由需要组件
import { Switch, Route, Redirect } from "dva/router";

import styles from './IndexPage.scss';
import  Navbar from './Navbar'
import Home from './Home';
import Admin from "./Admin";
import About from "./About";
import Menus from "./Menus";
import Login from "./user/login";
import Regist from "./user/regist";
import { Layout } from 'antd'
const {Header, Content} = Layout

function IndexPage(props) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navbar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一极路由 */}
        <Switch>
          <Route path="/home" component= {Home} />
          <Route path="/menus" component= {Menus} />
          <Route path="/about" component= {About} />
          <Route path="/admin" component= {Admin} />
          <Route path="/login" component= {Login} />
          <Route path="/regist" component= {Regist} />

          <Redirect to='/home' />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
