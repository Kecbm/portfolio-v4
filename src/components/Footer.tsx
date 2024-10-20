import React from 'react';
import { Layout } from 'antd';
const { Footer: FooterComponent } = Layout;

const Footer: React.FC = () => {

  return (
    <FooterComponent>
        Desenvolvido com ❤️ por <a href="https://github.com/kecbm">Klecianny Melo</a>
    </FooterComponent>
  );
};

export default Footer;
