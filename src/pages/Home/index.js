import React from 'react'
import styles from './index.scss'

export default function index() {
  return (
    <div className={styles.content}>
      <div className={styles.center}>
        <h1>Hello world, 欢迎订餐</h1>
        <h2>宁肯居无竹，不能食无肉</h2>
      </div>
    </div>
  )
}
