import React from 'react';
import { HomeOutlined, UserOutlined, CodeOutlined, FileTextOutlined, ContactsOutlined } from '@ant-design/icons';
import { StyledHeader, StyledMenu } from './StyledHeader';

const Header: React.FC = () => {
  const handleClick = (e: any) => {
    window.location.href = e.key;
  };

  return (
    <StyledHeader>
        <StyledMenu 
            mode="horizontal"
            onClick={handleClick}
        >
            <StyledMenu.Item
                key="/"
                icon={<HomeOutlined />}
            >
                Home
            </StyledMenu.Item>
            <StyledMenu.Item
                key="/about"
                icon={ <UserOutlined /> }
            >
                Sobre
            </StyledMenu.Item>
            <StyledMenu.Item
                key="/projects"
                icon={ <CodeOutlined />}
            >
                Projetos
            </StyledMenu.Item>
            <StyledMenu.Item
                key="/articles"
                icon={ <FileTextOutlined />}
            >
                Artigos
            </StyledMenu.Item>
            <StyledMenu.Item
                key="/contact"
                icon={ <ContactsOutlined />}
            >
                Contato
            </StyledMenu.Item>
        </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
