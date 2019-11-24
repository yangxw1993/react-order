import React from 'react'
import {Button, Icon, Table} from 'antd';
export default function index() {
  const columns = [
    {
      title: '商品',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '内存',
      dataIndex: 'size',
      key: 'size',
      render: text => <span>{text}</span>
    },
    {
      title: '加入',
      key: 'action',
      render: text => {
        const obj = {
          children: (
            <Button>
              <Icon type='plus' />
            </Button>
          )
        };
        return obj
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
          size: 13,
          price: 13000
        },
        {
          size: 15,
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
  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={data} />
  )
}

