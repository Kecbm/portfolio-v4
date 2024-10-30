import StyledContent from './StyledHome';
import { Button } from 'antd';
import { ExportOutlined, DownloadOutlined } from '@ant-design/icons';

const Home: React.FC = () => {

  const handleAboutClick = () => {
    window.location.href = '/about';
  };

  return (
    <StyledContent>
      <h1>Olá, eu sou Klecianny Melo</h1>
      <p>Desenvolvedora Full Stack Pleno com mais de 2 anos de experiência, focada em colaboração, resultados e aprendizado contínuo, com participação ativa na comunidade de tecnologia e autora de artigos sobre carreira e soft skills.</p>
      <Button  type='text' shape='round' size='large' icon={<ExportOutlined />} onClick={handleAboutClick}>Saiba Mais</Button>
      <Button type='primary' shape='round' icon={<DownloadOutlined />} size='large' style={{ backgroundColor: '#F11052' }}>Baixe o meu CV</Button>
      <img src='https://avatars.githubusercontent.com/u/67391952?v=4' alt='Klecianny' />
    </StyledContent>
  );
};

export default Home;
