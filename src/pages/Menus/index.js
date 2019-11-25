import React from 'react'
import {Button, Icon, Table} from 'antd';
export default function index() {
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
      render: text => {
        return  {
          children: (
            <Button type="primary">
              <Icon type='plus' />
            </Button>
          )
        }
      }
    }
    /*{
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
      ),
    },*/
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
  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={dataSource} />
  )
}

