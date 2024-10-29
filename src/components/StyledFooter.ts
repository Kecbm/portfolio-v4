import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  max-width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  min-height: 100vh;
  height: fit-content;
  padding: 100px 400px 100px 400px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;

  #section-one-ft {
    justify-content: flex-start;
  }

  #title-ft-one {
    font-size: 100px;
  }

  #sub-title-ft-one {
    font-size: 20px;
  }

  #section-two-ft {
    display: flex;
    flex-direction: row;
  }

  .assignments-ft {
    padding: 100px;
  }

  .icon-ft {
    font-size: 35px;
    margin-bottom: 20px;
  }

  .text-ft {
    font-size: 12px;
  }

  .link-ft {
    font-size: 12px;
    color: #F11052;
  }

  .link-ft::selection {
    background-color: #FFFFFF;
  }

  #section-three-ft {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  #title-ft-two {
    font-size: 73px;
  }

  #newtwork-links-ft {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  #network-ft {
    font-size: 11px;
    margin-top: 80px;
  }

  .newtwork-icon-ft {
    font-size: 32px;
    cursor: pointer;
    padding: 10px;
  }

  #Copyright {
    font-size: 10px;
    color: #777777;
    margin: 80px;
  }
`;

export { StyledFooter };
