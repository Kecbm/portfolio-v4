import React from 'react';
import { DesktopOutlined, ReadFilled, TeamOutlined, HeartFilled, LinkedinFilled, GithubFilled, InstagramFilled } from '@ant-design/icons';
import { StyledFooter } from './StyledFooter';

const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <h1>Colaboração, Foco em Resultados e Aprendizado Contínuo.</h1>
      Como desenvolvedora pleno, integro times de tecnologia com disposição para colaborar, compartilhar conhecimento e entregar produtos de alta qualidade que geram valor para o negócio.

      <br />

      <DesktopOutlined />
      Desenvolvedora Full Stack | 2+ anos de Experiência
      <a href='#' target='_blank' rel='noreferrer'>Baixe meu CV e confira minhas qualificações</a>

      <br />

      <ReadFilled />
      Autora de Artigos sobre Carreira, Soft Skills e Negócios
      <a href='#' target='_blank' rel='noreferrer'>Leia meus insights no blog.</a>

      <br />

      <TeamOutlined />
      Participante Ativa da Comunidade de Tecnologia
      <a href='#' target='_blank' rel='noreferrer'>Confira meu perfil no Bluesky e fique por dentro das discussões mais recentes</a>

      <br />

      <h1>Compartilho Conhecimento e Construo o Futuro</h1>

      <br />

      Conecte-se comigo e faça parte dessa jornada:
      <LinkedinFilled />
      <GithubFilled />
      {/* Bluesky */}
      <InstagramFilled />

      <br />

      Desenvolvido com <HeartFilled /> por <a href="https://github.com/kecbm">Klecianny Melo</a>
    </StyledFooter>
  );
};

export default Footer;
