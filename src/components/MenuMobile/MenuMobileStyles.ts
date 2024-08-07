import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed; /* Use fixed para garantir que o menu se sobreponha a todo o conteúdo */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(25, 88, 24, 0.95) 0%, rgba(17, 18, 17, 0.95) 95%);
  backdrop-filter: blur(3px);
  z-index: 1000; /* Aumente o z-index se necessário para garantir que o menu fique acima de outros conteúdos */
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease, pointer-events 0s ease 0.5s; /* Ajuste o timing da transição */
  
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: transform 0.7s ease; /* Transição suave para o ícone de fechar */
  }

  .LinksNavBar2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    margin-top: 25px;
    transform: scale(1.4);
    transition: transform 0.7s ease; /* Transição suave para links */
    position: relative;
  }

  .LinksNavBar2::after {
    content: ''; /* Cria um elemento pseudo */
    position: absolute; /* Posiciona em relação ao link */
    width: 0%; /* Largura total */
    height: 1px; /* Altura do sublinhado */
    bottom: 0; /* Alinha na parte inferior do link */
    left: 0; /* Começa do canto esquerdo */
    background-color: rgb(0, 173, 111); /* Cor do sublinhado inicial */
    transition: width 0.3s ease; /* Transição suave do sublinhado */
  }

  .LinksNavBar2:hover::after {
    width: 100%;
  }

  @media (min-width: 800px) {
    .LinksNavBar2 {
      display: flex;
    }
  }

  ${({ isVisible }) => isVisible && `
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.5s ease, pointer-events 0s ease; /* Remove o delay na transição */
    
    > svg {
      transform: rotate(0deg);
    }
  `}
`;
