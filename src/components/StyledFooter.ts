import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  max-width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  height: 50vh;
  padding: 100px 400px 100px 400px;
  font-family: 'Roboto';
`;

export { StyledFooter };
