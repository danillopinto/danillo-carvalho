
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/my-avatar.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import theme from "../../../../theme";
import "./Hero.css";

const Hero = () => {

    const StyledHero = styled("div")(() => ({

        backgroundColor: "rgb(14, 14, 14)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingBottom: "50px",
        },
        [theme.breakpoints.up('md')]: {
            paddingBottom: "0px",

        },

    }))

    const StyledImg = styled("img")(() => ({

        borderRadius: "50%",
        border: "1px solid #FFFFFF",
        [theme.breakpoints.up('xs')]: {
            width: "70%",
        },
        [theme.breakpoints.up('md')]: {
            width: "90%",

        },

    }))

    return (

        <>

            <div id="Inicio"></div>

            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">

                                <Box position="absolute" width="130%" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>

                                <Box position="relative" textAlign="center" marginTop="80px">
                                    <div id="Img"><StyledImg src={Avatar} /></div>

                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h2" color="secondary" textAlign="center" fontWeight="500">Danillo Carvalho</Typography>
                            <Typography variant="h4" color="rgb(0, 173, 111)" textAlign="center" >
                                <div className="container">
                                    <div className="typing"></div>
                                </div>
                            </Typography>
                            <Grid container>

                                <Grid item xs={12} display="flex" justifyContent="center">

                                    <a href="https://www.linkedin.com/in/danillo-carvalho-46874b1a4/" target="blank_" className="RedesSociais"><LinkedInIcon /></a>

                                    <a href="https://github.com/danillopinto" target="blank_" className="RedesSociais"><GitHubIcon /></a>

                                    <a href="https://www.instagram.com/danyllo_pinto/" target="blank_" className="RedesSociais"><InstagramIcon /></a>


                                </Grid>

                            </Grid>



                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

            <div id="NavSobreMim"></div>

        </>
    )
}

export default Hero

