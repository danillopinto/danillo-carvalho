import "../Projetos/Projetos.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoMagazine from "../../../assets/images/magazine-colchoes.png"
import LogoSejaMais from "../../../assets/images/seja-mais.webp"
import LogoSolaris from "../../../assets/images/logo.solaris.png"
import myPortifolio from "../../../assets/images/animacao.svg"
import finances from "../../../assets/images/finances.svg"
import bsMalharia from "../../../assets/images/LOGO_BS_MALHARIA-1-removebg-preview-1.png"

import styled from "styled-components";
const Projetos = () => {

    const StyledProjetos = styled("div")(() => ({

        backgroundColor: "rgb(14, 14, 14)",
        paddingBottom: "50px",

    }))

    return (
        <>

            <StyledProjetos>

                <h2 id="titleH2"> Meus  <p id="title"> Projetos </p> </h2>

                <div id="projetos">

                    <div className="DivProjetos">

                        <img className="LogoMagazine" src={LogoMagazine} />


                        Magazine Colchões é um e-commerce seguro e intuitivo, com catálogo dinâmico, pagamentos seguros e suporte ao cliente.
                        <br /> <br />
                        <a href="https://magazinecolchoes.com/" target="_blank" className="LinkProjetos"> <OpenInNewIcon /> magazinecolchoes.com</a>

                    </div>

                    <div className="DivProjetos">

                        <img className="LogoSejaMais" src={LogoSejaMais} />

                        Seja Mais é uma landing page envolvente e otimizada para converter visitantes em clientes, com design atraente, conteúdo impactante e navegação intuitiva.
                        <br /> <br />

                        <a href="https://cursosejamais.com.br/" target="_blank" className="LinkProjetos"><OpenInNewIcon />cursosejamais.com.br</a>

                    </div>

                    <div className="DivProjetos">

                        <img className="energia-solaris" src={LogoSolaris} />

                        Solaris energia é um sistema avançado de cálculo de economia com energia solar que permite estimar com precisão o impacto financeiro
                        da instalação de sistemas solares.
                        <br /> <br />

                        <a href="https://solaris-energia.vercel.app" target="_blank" className="LinkProjetos"><OpenInNewIcon />solaris-energia.vercel.app</a>

                    </div>

                </div>

                <div id="projetos" className="projetos2">

                    <div className="DivProjetos" id="DivProjetos">

                        <img className="myPortifolio" src={myPortifolio} />

                        Projeto criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.
                        <br /> <br />

                        <a href="https://danillo-carvalho.vercel.app" target="_blank" className="LinkProjetos"> <OpenInNewIcon />danillo-carvalho.vercel.app</a>

                    </div>

                    <div className="DivProjetos">

                        <img className="finances" src={finances} />

                        O Sistema de Controle Financeiro é uma solução intuitiva e eficiente para gerenciar suas finanças pessoais.

                        <br /> <br />

                        <a href="https://controle-financeiro-taupe-mu.vercel.app/" target="_blank" className="LinkProjetos"> <OpenInNewIcon />controle-financeiro.vercel.app/</a>


                    </div>

                    <div className="DivProjetos">

                        <img className="bsMalharia" src={bsMalharia} />

                        Bs Malharia é um e-commerce especializado em malharia no geral, oferecendo uma experiência de compra simples,
                        segura e eficiente.
                        <br /> <br />

                        <a href="https://bsmalharia.com.br/" target="_blank" className="LinkProjetos"> <OpenInNewIcon />bsmalharia.com.br</a>

                    </div>

                </div>
            </StyledProjetos>

            <div id="NavHabilidades"></div>

        </>
    )
}

export default Projetos