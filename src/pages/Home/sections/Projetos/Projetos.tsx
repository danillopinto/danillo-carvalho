import "../Projetos/Projetos.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoMagazine from "../../../assets/images/magazine-colchoes.png"
import LogoSejaMais from "../../../assets/images/seja-mais.webp"
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


                        Magazine Colchões é um e-commerce robusto e seguro, que oferece uma experiência de compra intuitiva e funcionalidades
                        avançadas como catálogo dinâmico, pagamentos seguros e suporte ao cliente.
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

                        <div className="Logos">JavaScript</div>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur enim saepe libero in sequi mollitia placeat!
                        <br /> <br />

                        <a href="#" target="_blank" className="LinkProjetos"> <OpenInNewIcon />embreve.com</a>

                    </div>

                </div>

                <div id="projetos" className="projetos2">

                    <div className="DivProjetos" id="DivProjetos">

                        <div className="Logos">HTML</div>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur enim saepe libero in sequi mollitia placeat!
                        <br /> <br />

                        <a href="#" target="_blank" className="LinkProjetos"> <OpenInNewIcon />embreve.com</a>

                    </div>

                    <div className="DivProjetos">

                        <div className="Logos">CSS</div>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur enim saepe libero in sequi mollitia placeat!
                        <br /> <br />

                        <a href="#" target="_blank" className="LinkProjetos"> <OpenInNewIcon />embreve.com</a>


                    </div>

                    <div className="DivProjetos">

                        <div className="Logos">React</div>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur enim saepe libero in sequi mollitia placeat!
                        <br /> <br />

                        <a href="#" target="_blank" className="LinkProjetos"> <OpenInNewIcon />embreve.com</a>

                    </div>

                </div>
            </StyledProjetos>

            <div id="NavHabilidades"></div>

        </>
    )
}

export default Projetos