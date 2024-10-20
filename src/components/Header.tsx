import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, CodeOutlined, FileTextOutlined, ContactsOutlined } from '@ant-design/icons';
import StyledHeader from './StyledHeader';
const { Header: HeaderComponent } = Layout;

const Header: React.FC = () => {
  const handleClick = (e: any) => {
    window.location.href = e.key;
  };

  return (
    <StyledHeader>
        <HeaderComponent>
            <Menu 
                mode="horizontal"
                onClick={handleClick}
            >
                <Menu.Item
                    key="/"
                    icon={<HomeOutlined />}
                />
                <Menu.Item
                    key="/about"
                    icon={ <UserOutlined /> }
                />
                <Menu.Item
                    key="/projects"
                    icon={ <CodeOutlined />}
                />
                <Menu.Item
                    key="/articles"
                    icon={ <FileTextOutlined />}
                />
                <Menu.Item
                    key="/contact"
                    icon={ <ContactsOutlined />}
                />
            </Menu>
        </HeaderComponent>
    </StyledHeader>
  );
};

export default Header;
