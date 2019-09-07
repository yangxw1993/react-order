import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'dva/router'
import styles from './index.scss'

export default class index extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      selectedKeys: []
    }
  }
  // 页面刷新
  componentDidMount(){
    this.handleSelectedKey(this.props.location.pathname);
  };
  UNSAFE_componentWillReceiveProps(nextProps){
    const {pathname} = this.props.location;
    if(nextProps.location.pathname !== pathname){
      // 当路由发生改变时
      this.handleSelectedKey(nextProps.location.pathname)
    }
  }
  // 处理url key
  handleSelectedKey(pathname){
    const temp = pathname.split('/');
    const key = temp && temp.length >= 2 ? temp[1] : 'home';
    this.setState({
      selectedKeys: [key]
    })
  }
  render(){  
    return (
      <nav className={styles.nav}>
        <span className={styles.logo}></span>
        <Menu className={styles['menu-left']} mode="horizontal" selectedKeys={this.state.selectedKeys} defaultSelectedKeys={['home']}>
          <Menu.Item key={'home'}>
            <Link to="/home">主页</Link>
          </Menu.Item>
          <Menu.Item key={'menus'}>
            <Link to="/menus">菜单</Link>
          </Menu.Item>
          <Menu.Item key={'admin'}>
            <Link to="/admin">管理</Link>
          </Menu.Item>
          <Menu.Item key={'about'}>
            <Link to="/about">关于我们</Link>
          </Menu.Item>
          <Menu.Item key={'login'} className={styles.login}>
            <Link to="/login">登录</Link>
          </Menu.Item>
          <Menu.Item key={'regist'} className={styles.registe}>
            <Link to="/regist">注册</Link>
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
}