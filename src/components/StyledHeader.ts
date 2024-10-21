import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  width: 100%;
  background-color: #161617CC;
`;

const StyledMenu = styled(Menu)`
  background-color: transparent;
  
  .ant-menu-item {
    color: #D5D5D5;
    border-bottom: none;

    &:hover {
      color: #FFFFFF !important;
    }
  }
`;

export { StyledHeader, StyledMenu };
