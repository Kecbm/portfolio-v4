import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0e0c0d',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            flex: 1,
            backgroundColor: '#0e0c0d',
          }}
        >
          <Menu.Item
            key="1"
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              // backgroundColor: '#ff0059'
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="2" style={{ color: '#ffffff' }}>Sobre</Menu.Item>
          <Menu.Item key="3" style={{ color: '#ffffff' }}>Projetos</Menu.Item>
          <Menu.Item key="4" style={{ color: '#ffffff' }}>Artigos</Menu.Item>
          <Menu.Item key="5" style={{ color: '#ffffff' }}>Contato</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
          minHeight: '100vh',
          maxHeight: 'fit-content',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#ff0059',
          color: '#0e0c0d',
          fontWeight: 'bold',
        }}
      >
        Desenvolvido com 🖤 por <a href="https://github.com/kecbm" style={{ color: '#0e0c0d' }}>Klecianny Melo</a>
      </Footer>
    </Layout>
  );
};
export default App;
