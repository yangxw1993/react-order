import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { Link } from 'dva/router'
import styles from './index.scss'

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeys: []
    }
  }
  handleClickMenu = ({key}) => {
    if(key === 'logout'){
      localStorage.clear();
      this.props.history.push('/')
    }
  };
  menu = (
    <Menu onClick={this.handleClickMenu}>
      <Menu.Item key="logout">
        <span>退出</span>
      </Menu.Item>
    </Menu>
  );
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
    const {routes} = this.props;
    return (
      <nav className={styles.nav}>
        <span className={styles.logo}></span>
        <Menu className={styles['menu-left']} mode="horizontal" selectedKeys={this.state.selectedKeys} defaultSelectedKeys={['home']}>
          {routes.filter( item => item.isLogin || !localStorage.username).map((route, i) => (
            <Menu.Item key={route.path.substr(1)}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
        {localStorage.username && (
          <Dropdown overlay={ this.menu} className={styles['dropdown-menu']}>
            <a className="antd-dropdown-link" href="#">
              <span className={styles.username}>{localStorage.username}</span>
              <Icon type="down" className={styles.icon} />
            </a>
          </Dropdown>
        )}
      </nav>
    )
  }
}
