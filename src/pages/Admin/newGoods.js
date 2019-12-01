import React, {Component} from 'react';
import {Button, Form, Input, message} from 'antd'
import styles from '../IndexPage.scss'
import { addGoods } from "../../services/goods";
const {TextArea} = Input;

class NewGoods extends Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, value) => {
      if(!err){
        const {goodsName, goodsDesc, size1, price1, size2, price2} = value;
        const data = {
          goodsName,
          goodsDesc,
          options: [
            {
              size: size1,
              price: price1
            },
            {
              size: size2,
              price: price2
            }
          ]
        };
        addGoods(data).then(res => {
          message.success('添加成功');
          window.location.href = '/#/menus'
        }).catch(error => message.error(err.message))
      }
    })
  };
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 }
      },
      colon: false
    };
    const { getFieldDecorator } = this.props.form;
    const goodsNameConfig =  {
      rules: [{required: true, message: '请输入商品名' }],
    };
    const goodsDescConfig =  {
      rules: [{required: true, message: '请描述商品' }],
    };
    const goodsSizeConfig =  {
      rules: [{required: true, message: '请输入大小' }],
    };
    const goodsPriceConfig =  {
      rules: [{required: true, message: '请输入价格' }],
    };
    return (
      <div>
        <h3>添加新的商品 </h3>
        <Form>
          <Form.Item {...formItemLayout} label='商品'>
            {getFieldDecorator('goodsName', goodsNameConfig)(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label='描述'>
            {getFieldDecorator('goodsDesc', goodsDescConfig)(<TextArea />)}
          </Form.Item>
          <p>
            <strong>选项1：</strong>
          </p>
          <Form.Item {...formItemLayout} label='尺寸1'>
            {getFieldDecorator('size1', goodsSizeConfig)(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label='价格1'>
            {getFieldDecorator('price1', goodsPriceConfig)(<Input />)}
          </Form.Item>
          <p>
            <strong>选项2：</strong>
          </p>
          <Form.Item {...formItemLayout} label='尺寸2'>
            {getFieldDecorator('size2', goodsSizeConfig)(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label='价格2'>
            {getFieldDecorator('price2', goodsPriceConfig)(<Input />)}
          </Form.Item>
          <Form.Item>
            <Button className={styles['btn-100']} onClick={this.handleSubmit} type={"primary"}>提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(NewGoods);
