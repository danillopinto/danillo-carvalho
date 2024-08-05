
import { Container, Grid, styled } from "@mui/material"
import "./Footer.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {

    const StyledFooter = styled("div")(() => ({

        backgroundColor: "rgb(10, 10, 10)",
        color: "white",
        paddingTop: "50px",
        paddingBottom: "80px",
    }))

    return (

        <>

            <StyledFooter>

                <h2 id="titleh2FaleComigo"> Fale  <p id="titleExper" className="titleHabilidades"> Comigo </p> </h2>


                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>

                            <h5>ENDEREÇO</h5>
                            <p>Rua 15, 27</p>
                            <p>Vale do Açai</p>
                            <p>Açailândia-MA</p>
                            <br />
                            <ul><li className="foneEemail"><LocalPhoneIcon /></li> <li> (99) 98834-6472</li></ul>
                            <ul><li className="foneEemail"> <EmailIcon /></li> <li> danillopnt511@gmail.com</li></ul>
                            <h5>SIGA ME</h5>
                            <ul><a href="https://www.instagram.com/danyllo_pinto/" target="blank_"><li className="sigaMe"><InstagramIcon /></li></a>
                            <a href="https://www.linkedin.com/in/danillo-carvalho" target="blank_"><li className="sigaMe"><LinkedInIcon /></li> </a>
                            <a href="https://github.com/danillopinto" target="blank_"><li className="sigaMe"><GitHubIcon /></li></a></ul>


                            
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <h5>ENTRE EM CONTATO COMIGO</h5>
                            <a href="https://wa.me/5599988346472" target="blank_"><button id="BotaoWhatsApp">Enviar via WhatsApp</button></a>
                            

                        </Grid>
                    </Grid>
                </Container>

            </StyledFooter>

            <div id="Rodapé">© 2023 / Danillo Carvalho / Todos os direitos reservados</div>

        </>
    )
}

export default Footer

