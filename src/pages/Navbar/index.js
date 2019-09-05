import React from 'react'
import { Menu} from 'antd'
import {Link} from 'dva/router'
import styles from './index.scss'

export default function index() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}></span>
      <Menu className={styles['menu-left']} mode="horizontal" defaultSelectedKeys={['home']}>
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