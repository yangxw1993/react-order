import React, {Component} from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styles from './index.scss'
import { phone_reg } from '../../utils/Regexp.js';
import {register} from '../../services/user'
import axios from 'axios'


class regist extends Component {
  state = {
    phone: '18812345678'
  };
  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      if(!err){
        console.log(values,'values**');
        const param = {
          username: values.phone,
          password: values.pwd,
        }
        // register(param).then(res => console.log(res))
        // Send a POST request
        axios({
          method: 'post',
          url: 'http://localhost:3001/user/register',
          data: param,
          headers: {
            'content-type': 'application/json'
          }
        }).then(res => console.log(res,'*******'))
      }
    })
  }
  // 自定义表单校验规则
  validatorForm = (rule, value, callback) => {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      callback(rule.message);
    } else {
      callback();
    }
  };
  // 自定义校验两次密码是否一致
  validatorPwd = (rule, value, callback) => {
    if (value !== this.props.form.getFieldValue('pwd')) {
      callback(rule.message);
      return;
    }
    callback();
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
          <Form.Item className="account-form-item" label="用户名：">
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
              initialValue: this.state.phone
            })(<Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />)}

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

          </Form.Item>
          <Form.Item label="确认密码：">
            {getFieldDecorator('rpwd', {
              rules: [
                {
                  required: true,
                  message: '密码不能为空，请输入密码！'
                },
                {
                  validator: this.validatorPwd,
                  message: '两次输入的密码不一致！'
                }
              ]
            })(
              <Input.Password
               prefix={<Icon type="lock"/>}
               maxLength={16}
               placeholder="请输入6-16位字母、数字或特殊字符的密码" />
            )}
            {/* <Input.Password prefix={<Icon type="lock"/>} placeholder="请再次输入密码" /> */}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button onClick={this.handleSubmit} className='btn' type="primary">注册</Button>
          </Form.Item>

        </Form>
      </div>
    )
  }
}
export default Form.create()(regist);
