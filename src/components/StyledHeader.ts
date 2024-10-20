// src/components/StyledHeader.ts
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

// Criando um Header estilizado
const StyledHeader = styled(AntHeader)`
  background-color: #282c34; /* Cor de fundo personalizada */
  color: white;              /* Cor do texto */
  display: flex;
  align-items: center;       /* Alinhamento vertical */
  justify-content: space-between; /* Espaçamento entre os itens */
  padding: 0 20px;          /* Padding horizontal */

  h1 {
    margin: 0;              /* Remover margem do título */
    font-size: 24px;        /* Tamanho da fonte do título */
  }

  /* Estilizando links ou outros elementos dentro do Header */
  a {
    color: white;           /* Cor dos links */
    margin-left: 20px;      /* Espaçamento entre os links */
    text-decoration: none;  /* Remover sublinhado */
    
    &:hover {
      text-decoration: underline; /* Substituir estilo ao passar o mouse */
    }
  }
`;

export default StyledHeader;
