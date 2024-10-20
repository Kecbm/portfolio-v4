import React from 'react';
import { Layout, Menu } from 'antd';
const { Header: HeaderComponent } = Layout;

const Header: React.FC = () => {
  const handleClick = (e: any) => {
    window.location.href = e.key;
  };

  return (
    <HeaderComponent>
        <Menu 
            mode="horizontal"
            onClick={handleClick}
        >
            <Menu.Item key="/">
                Home
            </Menu.Item>
            <Menu.Item key="/about">
                Sobre
            </Menu.Item>
            <Menu.Item key="/projects">
                Projetos
            </Menu.Item>
            <Menu.Item key="/articles">
                Artigos
            </Menu.Item>
            <Menu.Item key="/contact">
                Contato
            </Menu.Item>
        </Menu>
    </HeaderComponent>
  );
};

export default Header;
