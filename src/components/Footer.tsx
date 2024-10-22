import React from 'react';
import { DesktopOutlined, ReadFilled, TeamOutlined, HeartFilled, LinkedinFilled, GithubFilled, InstagramFilled } from '@ant-design/icons';
import { StyledFooter } from './StyledFooter';

const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <h1 id='title-ft-one'>Colaboração, Foco em Resultados e Aprendizado Contínuo.</h1>
      <p id='sub-title-ft-one'>Como desenvolvedora pleno, integro times de tecnologia com disposição para colaborar, compartilhar conhecimento e entregar produtos de alta qualidade que geram valor para o negócio.</p>

      <br />

      <DesktopOutlined className='icon-ft' />
      <p className='text-ft'>Desenvolvedora Full Stack | 2+ anos de Experiência</p>
      <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Baixe meu CV e confira minhas qualificações</a>

      <br />

      <ReadFilled className='icon-ft' />
      <p className='text-ft'>Autora de Artigos sobre Carreira, Soft Skills e Negócios</p>
      <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Leia meus insights.</a>

      <br />

      <TeamOutlined className='icon-ft' />
      <p className='text-ft'>Participante Ativa da Comunidade de Tecnologia</p>
      <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Confira meu perfil no Bluesky e fique por dentro das discussões mais recentes</a>

      <br />

      <h2 id='title-ft-two'>Compartilho Conhecimento e Construo o Futuro.</h2>

      <br />

      <p id='network-ft'>Conecte-se comigo e faça parte dessa jornada:</p>
      <LinkedinFilled className='newtwork-icon-ft' />
      <GithubFilled className='newtwork-icon-ft' />
      {/* Bluesky */}
      <InstagramFilled className='newtwork-icon-ft' />

      <br />

      <p id='Copyright'>Desenvolvido com <HeartFilled /> por <a href="https://github.com/kecbm">Klecianny Melo</a></p>
    </StyledFooter>
  );
};

export default Footer;
