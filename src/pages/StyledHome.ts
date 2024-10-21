import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const StyledContent = styled(Content)`
  background-color: #f0f2f5;
  padding: 24px;
  min-height: 100vh;
  max-height: fit-content;
  max-width: 100%;
`;

export default StyledContent;
