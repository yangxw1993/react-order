import React from 'react'
import {connect } from 'dva'
import styles from './index.scss'

function index(props) {
  console.log(props,'props')
  return (
    <div className={styles.content}>
      <div className={styles.center}>
        <h1>Hello world, 欢迎订餐</h1>
        <h2>宁肯居无竹，不能食无肉</h2>
        <h3>{props.text}</h3>
      </div>
    </div>
  )
}
// 关联home.js 和当前组件
export default connect(({home}) => ({...home}))(index)
