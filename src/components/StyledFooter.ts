import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  max-width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  max-height: fit-content;
  padding: 100px 400px 100px 400px;
  font-family: 'Roboto';

  #title-ft-one {
    font-size: 100px;
  }

  #sub-title-ft-one {
    font-size: 20px;
  }

  .icon-ft {
    font-size: 35px;
  }

  .text-ft {
    font-size: 12px;
  }

  .link-ft {
    font-size: 12px;
    color: #F11052;
  }

  #title-ft-two {
    font-size: 73px;
  }

  #network-ft {
    font-size: 11px;
  }

  .newtwork-icon-ft {
    font-size: 32px;
  }

  #Copyright {
    font-size: 10px;
    color: #777777;
  }
`;

export { StyledFooter };
