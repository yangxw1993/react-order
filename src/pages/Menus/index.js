import React, {Component} from 'react';
import {Button, Icon, Table, Row, Col} from 'antd';
import style from "./index.scss";

class Index extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    cart: [],
  };
  renderMenuTable(){
    const columns = [
      {
        title: '商品',
        dataIndex: 'name',
        key: 'name',
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

    const data = [
      {
        key: 1,
        name: 'MacBook Pro',
        description: '好用的Mac',
        options:[
          {
            size: 256,
            price: 13000
          },
          {
            size: 512,
            price: 18000
          }
        ]
      },
      {
        key:2,
        name: 'iPhone 7',
        description: '好用的iPhone',
        options:[
          {
            size: 32,
            price: 5000
          },
          {
            size: 64,
            price: 6000
          }
        ]
      },
      {
        key: 3,
        name: '小米 6',
        description: '好用的小米',
        options:[
          {
            size: 64,
            price: 2800
          },
          {
            size: 128,
            price: 3600
          }
        ]
      }
    ];
    let dataSource = [];
    data.forEach((item, index) => {
      item.options.forEach((optionItem, optionsIndex) => {
        const key = `${item.key}_${optionsIndex}`;
        Object.assign(item, optionItem, {key});
        dataSource.push({...item});
      });
    });
    const addCart = (item)=> {
      const {name, size, price} = item;
      this.setState({
        cart: [...this.state.cart, {name, price, size}]
      })
      console.log(this.state.cart,'**')
    };
    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource} />
    )
  }

  renderCartTable(){
    const columns = [
      {
        title: '数量',
        dataIndex: 'count',
        key: 'count',
        render(text, value, index){
          return {
            children: (
              <div>
                <Button type="primary" size="small" icon="minus" shape="circle" />
                <span> 1 </span>
                <Button type="primary" size="small" icon="plus" shape="circle" />
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
    return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={data} />
    )
  }

  render() {
    return (
      <Row>
        <Col sm={24} md={16}>{this.renderMenuTable()}</Col>
        <Col sm={24} md={8}>
          {this.renderCartTable()}
          <p className={style['total-price']}>总价：</p>
          <Button type="primary" className={style['submit']}>提交</Button>
        </Col>
      </Row>
    );
  }
}

Index.propTypes = {};

export default Index;

