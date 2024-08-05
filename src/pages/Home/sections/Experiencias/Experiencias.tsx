import { styled } from "@mui/material"
import theme from "../../../../theme"
import "../Experiencias/Experiencias.css"


const Experiencias = () => {

    const StyledExperiencias = styled("div")(() => ({

        backgroundColor: "rgb(14, 14, 14)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        paddingTop: "20px",
        width: "100%",
        [theme.breakpoints.up('xs')]: {

            paddingBottom: "50px",

        },
        [theme.breakpoints.up('md')]: {

            paddingBottom: "100px",
            paddingTop: "50px",

        },

    }))

    return (
        <>
            <div id="NavExperiencias"></div>

            <StyledExperiencias>

                <div id="DivExperiencias">

                    <h2 id="titleh2Experiencias"> Experi  <p id="titleExper">ências </p> </h2>

                    <div className="experiencias">

                        <h3 className="h3Experiencias">AVB (Aço verde do Brasil)</h3>

                        Na AVB, minha principal função foi transformar grandes volumes de dados em insights acionáveis através de análises
                        detalhadas e visualizações impactantes, facilitando a tomada de decisões estratégicas e melhorando a eficiência operacional.

                        <div className="divAbaixoExperiencia">
                            <p className="DatasExperiencias">2024 - Atualmente</p> <a href="https://www.linkedin.com/company/avbacoverdedobrasil/mycompany/" target="blank_" className="LinkedinExperiencias">Linkedin</a>
                        </div>

                    </div>

                    <div className="experiencias">

                        <h3 className="h3Experiencias">TXT software</h3>

                        Na TXT software, fui responsável pelo desenvolvimento de interfaces web responsivas e funcionais,
                        colaborando com equipes multidisciplinares em projetos complexos. Apliquei metodologias ágeis para otimizar
                        processos e garantir entregas pontuais, além de integrar APIs e serviços de terceiros para enriquecer a funcionalidade
                        das aplicações e assegurar uma experiência de usuário excepcional.

                        <div className="divAbaixoExperiencia">
                            <p className="DatasExperiencias">2023 - 2024</p> <a href="https://www.linkedin.com/company/txt-softwares/" target="blank_" className="LinkedinExperiencias">Linkedin</a>
                        </div>

                    </div>

                    <div className="experiencias">

                        <h3 className="h3Experiencias">FreeLancer</h3>

                        Como freelancer, criei e otimizei websites e aplicações para uma variedade de clientes, 
                        utilizando tecnologias como HTML, CSS, JavaScript e frameworks modernos. Meu trabalho envolveu desde o design 
                        e desenvolvimento até a implementação e manutenção, sempre focando em entregar soluções personalizadas e de alta 
                        qualidade que superaram as expectativas dos clientes.

                        <div className="divAbaixoExperiencia">
                            <p className="DatasExperiencias">2024</p> <a href="#" className="LinkedinExperiencias"></a>
                        </div>

                    </div>

                </div>


            </StyledExperiencias>

            <div id="NavProjetos"></div>

        </>
    )
}

export default Experiencias