import React from 'react'
import { Menu} from 'antd'
import styles from './index.scss'

export default function index() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}></span>
      <Menu className={styles['menu-left']} mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key={'home'}>主页</Menu.Item>
        <Menu.Item key={'menus'}>菜单</Menu.Item>
        <Menu.Item key={'admin'}>管理</Menu.Item>
        <Menu.Item key={'about'}>关于我们</Menu.Item>
        <Menu.Item key={'login'} className={styles.login}>登录</Menu.Item>
        <Menu.Item key={'regist'} className={styles.registe}>注册</Menu.Item>
      </Menu>
    </nav>
  )
}