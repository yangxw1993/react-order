import React, { Component } from 'react'
import {Form, Icon, Input, Button, message} from 'antd';
import { connect } from 'dva'
import styles from './index.scss'
import {login} from "../../services/user";
import {phone_reg} from "../../utils/Regexp";

@connect()
class index extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        const param = {
          username: values.phone,
          password: values.pwd,
        };
        login(param).then(userRes => {
          // 登录成功存储models
          this.props.dispatch({
            type: 'global/setUserInfo',
            payload: userRes
          }).then( () => {            
            // 跳转
            this.props.history.push('/'); 
          })        
          console.log(userRes)

        }).catch(err => message.error(err.message))
      }
    })
  };
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
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.account}>
        <Form {...formItemLayout} className="account-form">
          <Form.Item htmlFor="inline" className="account-form-item" label="用户名：">
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: '用户名不能为空, 请输入正确手机号'
                },
                {
                  pattern: phone_reg,
                  validator: this.validatorForm,
                  message: '请输入正确的手机号'
                }
              ],
              // initialValue: this.state.phone
            })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />)}
            {/*<Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />*/}
          </Form.Item>
          <Form.Item label="密码：">
            {getFieldDecorator('pwd', {
              rules: [
                {
                  required: true,
                  message: '密码不能为空，请输入密码！'
                }
              ]
            })(
              <Input.Password
                prefix={<Icon type="lock"/>}
                maxLength={16}
                placeholder="请输入6-16位字母、数字或特殊字符的密码" />
            )}
            {/*<Input.Password prefix={<Icon type="lock"/>} placeholder="请输入密码" />*/}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button onClick={this.handleSubmit} className='btn' type="primary">登录</Button>
          </Form.Item>

        </Form>
      </div>
    )
  }
}

export default Form.create()(index);
