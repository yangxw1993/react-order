import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styles from './index.scss'

export default class login extends Component {
  render(){  
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 4,
        },
      },
    };
    return (
      <div className={styles.account}>
        <Form {...formItemLayout} className="account-form">
          <Form.Item htmlFor="inline" className="account-form-item 123" label="用户名：">
            <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码：">
            <Input.Password prefix={<Icon type="lock"/>} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className='btn' type="primary">登录</Button>
          </Form.Item>
          
        </Form>
      </div>
    )
  }
}
