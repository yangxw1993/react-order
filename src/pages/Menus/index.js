import React, {Component} from 'react';
import {Button, Icon, Table, Row, Col, message} from 'antd';
import style from "./index.scss";
import {getGoodsList} from '../../services/goods'
import {init} from '../../services/init'

class Index extends Component {
  // 钩子函数
  componentDidMount() {
    this.getToken();
    this.getList();
  }
  // 初始化token
  getToken = () => {
    init().then(res => {
      console.log(res,'token**')
    }).catch(err => message(err.message))
  };
  // 获取列表
  getList = () => {
    getGoodsList().then(res => {
      if(res && res.length){
        this.setState({
          dataSource: res
        })
      }
    }).catch(err => message.error(err.message))
  };
  state = {
    cart: [],
    dataSource: []
  };
  renderMenuTable(){
    const columns = [
      {
        title: '商品',
        dataIndex: 'goodsName',
        key: 'goodsName',
        render(text, value, index){
          const obj = {
            children: (<b>{text}</b>),
            props: {},
          };
          obj.props.rowSpan = index % 2 ? 0 : 2;
          return obj
        }
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
        render(text, value, index){
          const obj = {
            children: text,
            props: {},
          };
          obj.props.rowSpan = index % 2 ? 0 : 2;
          return obj
        }
      },
      {
        title: '内存',
        dataIndex: 'size',
        key: 'size',
        render: text => <span>{text}G</span>
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        render: text => <span>¥{text}</span>
      },
      {
        title: '加入',
        key: 'action',
        render: (text, item) => {
          return  {
            children: (
              <Button onClick={() => addCart(item)} type="primary">
                <Icon type='plus' />
              </Button>
            )
          }
        }
      }
    ];
    let dataSource = [];
    this.state.dataSource.forEach((item, index) => {
      item.options.forEach((optionItem, optionsIndex) => {
        const key = `${item.id}_${optionsIndex}`;
        Object.assign(item, optionItem, {key});
        dataSource.push({...item});
      });
    });
    const addCart = (item)=> {
      let { cart } = this.state;
      const index =  cart.findIndex(cartItem => cartItem.key === item.key);
      if(index > -1){
        cart.splice(index, 1, {
          ...cart[index],
          count: cart[index].count + 1
        })
      }else{
        cart = [...cart, {...item, count: 1}]
      }
      this.setState({
        cart
      });
    };
    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowKey='key'
      />
    )
  }

  renderCartTable(){
    const columns = [
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
        render(text, record, index){
          return {
            children: (
              <div>
                <Button type="primary" onClick={() => reduceCartNum(index)} size="small" icon="minus" shape="circle" />
                <span> {record.count} </span>
                <Button type="primary" onClick={() => addCartNum(index)} size="small" icon="plus" shape="circle" />
              </div>
            )
          }
        }
      },
      {
        title: '商品',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      }
    ];
    const data = this.state.cart;
    // 减少购物车
    const reduceCartNum = index => {
      let {cart} = this.state;
      const curCart = cart[index];
      if(curCart.count <= 1){
        cart.splice(index, 1);
      }else{
        cart.splice(index, 1, {
          ...curCart,
          count: curCart.count - 1
        })
      }
      this.setState({
        cart
      })
    };
    const addCartNum = index => {
      let {cart} = this.state;
      const curCart = cart[index];
      cart.splice(index, 1, {
        ...curCart,
        count: curCart.count + 1
      });
      this.setState({
        cart
      })
    };
    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        rowKey='key'
      />
    )
  }

  render() {
    // 粗略计算，
    const totalPrice = this.state.cart.reduce((total, item) => (total += item.price * item.count ), 0);
    return (
      <Row>
        <Col sm={24} md={16}>{this.renderMenuTable()}</Col>
        <Col sm={24} md={8}>
          {this.renderCartTable()}
          <p className={style['total-price']}>总价：{totalPrice}</p>
          <Button type="primary" className={style['submit']}>提交</Button>
        </Col>
      </Row>
    );
  }
}

Index.propTypes = {};

export default Index;

