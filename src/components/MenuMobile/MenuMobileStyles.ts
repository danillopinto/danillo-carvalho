import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}


export const Container = styled.div<ContainerProps>`

position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background-color: rgba(17, 18, 17, 0.95);  
background: linear-gradient(34deg, rgba(25, 88, 24, 0.95) 0%, rgba(17 ,18 ,17, 0.95) 95%);
backdrop-filter: blur(3px);

opacity: 0;
pointer-events: none;
transition: .5s;

> svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg); 
    transition: .7s;
}

.LinksNavBar2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    margin-top: 25px;
    transform: scale(1.4);
    transition: .7s;
    position: relative;
}

    /* Estilo do sublinhado */
    .LinksNavBar2::after {
    content: ''; /* Cria um elemento pseudo */
    position: absolute; /* Posiciona em relação ao link */
    width: 0%; /* Largura total */
    height: 1px; /* Altura do sublinhado */
    bottom: 0; /* Alinha na parte inferior do link */
    left: 0; /* Começa do canto esquerdo */
    background-color: rgb(0, 173, 111); /* Cor do sublinhado inicial */
    transition: all 0.3s ease; /* Transição suave de 0.3 segundos */
  }

   /* Efeito ao passar o mouse */
   .LinksNavBar2:hover::after {
    width: 100%;
  }

  @media (min-width: 800px) {

    .LinksNavBar2 {
      display: flex;
    }
  }

${({ isVisible }) => isVisible &&`

opacity: 1;
   pointer-events: auto;

> svg {
   transform: rotate(0deg); 
}

nav {
   transform: scale(0);
}

` }

`;