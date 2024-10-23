import React from 'react';
import { DesktopOutlined, ReadFilled, TeamOutlined, HeartFilled, LinkedinFilled, GithubFilled, InstagramFilled } from '@ant-design/icons';
import { StyledFooter } from './StyledFooter';

const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <section id='section-one-ft'>
        <h1 id='title-ft-one'>Colaboração, Foco em Resultados e Aprendizado Contínuo.</h1>
        <p id='sub-title-ft-one'>Como desenvolvedora pleno full stack, integro times de tecnologia com disposição para colaborar, compartilhar conhecimento e entregar produtos de alta qualidade que geram valor para o negócio.</p>
      </section>

      <section id='section-two-ft'>
        <div className='assignments-ft'>
          <DesktopOutlined className='icon-ft' />
          <p className='text-ft'>Desenvolvedora Full Stack | 2+ anos de Experiência</p>
          <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Baixe meu CV e confira minhas qualificações</a>
        </div>
        
        <div className='assignments-ft'>
          <ReadFilled className='icon-ft' />
          <p className='text-ft'>Autora de Artigos sobre Carreira, Soft Skills e Negócios</p>
          <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Leia meus insights</a>
        </div>

        <div className='assignments-ft'>
          <TeamOutlined className='icon-ft' />
          <p className='text-ft'>Participante Ativa da Comunidade de Tecnologia</p>
          <a href='#' target='_blank' rel='noreferrer' className='link-ft'>Discussões mais recentes no BlueSky</a>
        </div>
      </section>

      <section id='section-three-ft'>
        <h2 id='title-ft-two'>Compartilho Conhecimento e Construo o Futuro.</h2>

        <p id='network-ft'>Conecte-se comigo e faça parte dessa jornada:</p>
        <div>
          <LinkedinFilled className='newtwork-icon-ft' />
          <GithubFilled className='newtwork-icon-ft' />
          {/* Bluesky */}
          <InstagramFilled className='newtwork-icon-ft' />
        </div>

        <p id='Copyright'>Desenvolvido com <HeartFilled /> por <a href="https://github.com/kecbm" className='link-ft'>Klecianny Melo</a></p>
      </section>
    </StyledFooter>
  );
};

export default Footer;
