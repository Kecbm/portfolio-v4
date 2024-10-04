import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ContactsOutlined, ReadOutlined, UserOutlined, CodeOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import FooterComponent from './components/Footer';
const { Header, Content, Footer } = Layout;

const App = () => {
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
          style={{
            flex: 1,
            backgroundColor: '#0e0c0d',
          }}
        >
          <Menu.Item
            key="home"
            icon={<HomeOutlined />}
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              // backgroundColor: '#ff0059'
            }}
          >
            <a href="#home">Início</a>
          </Menu.Item>
          <Menu.Item
            key="about"
            icon={<UserOutlined />}
            style={{ color: '#ffffff' }}
          >
            <a href="#about">Sobre</a>
          </Menu.Item>
          <Menu.Item
            key="projects"
            icon={<CodeOutlined />}
            style={{ color: '#ffffff' }}
          >
            <a href="#projects">Projetos</a>
          </Menu.Item>
          <Menu.Item
            key="articles"
            icon={<ReadOutlined />}
            style={{ color: '#ffffff' }}
          >
            <a href="#articles">Artigos</a>
          </Menu.Item>
          <Menu.Item
            key="contact"
            icon={<ContactsOutlined />}
            style={{ color: '#ffffff' }}
          >
            <a href="#contact">Contato</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
          minHeight: '100vh',
          maxHeight: 'fit-content',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          id="home"
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
          }}
        >
          <Home />
        </div>
        <div
          id="about"
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
          }}
        >
          <About />
        </div>
        <div
          id="projects"
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
          }}
        >
          <Projects />
        </div>
        <div
          id="articles"
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
          }}
        >
          <Articles />
        </div>
        <div
          id="contact"
          style={{
            padding: 24,
            minHeight: '100vh',
            maxHeight: 'fit-content',
            Width: '100%',
          }}
        >
          <Contact />
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
        <FooterComponent />
      </Footer>
    </Layout>
  );
};
export default App;
