import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import  Navbar from './Navbar'
import { Layout } from 'antd'
const {Header, Content} = Layout

function IndexPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navbar />
      </Header>
      <Content className={styles.content}>Content</Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
