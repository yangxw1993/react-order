import React, {Component} from 'react';
import {Button, Table, Row, Col} from 'antd';
import NewGoods from "./newGoods";

class Index extends Component {
  renderMenuTable(){
    const dataSource = [
      {
        key: 1,
        name: '耳机🎧'
      }
    ];
    const colums = [
      {
        key: 'name',
        title: '商品',
        dataIndex: 'name'
      },
      {
        key: 'action',
        title: 'DElETE',
        render: (text, record) => (
          <Button type="danger" icon="delete"  />
        )
      }
    ];
    return(
      <Table
       pagination={false}
       dataSource={dataSource}
       columns={colums}
       locale={{emptyText: '暂无商品'}}
      />
    )
  }
  renderAddGoods(){
    return <NewGoods />
  }
  render() {
    return (
      <Row>
        <Col sm={24} md={16}>
          {this.renderAddGoods()}
        </Col>
        <Col sm={24} md={8}>
          <h3>菜单</h3>
          {this.renderMenuTable()}
        </Col>
      </Row>
    );
  }
}

export default Index;
