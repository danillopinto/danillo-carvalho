import { Box, Container, Grid, styled } from "@mui/material"
import theme from "../../../../theme"
import "../SobreMim/SobreMim.css"
import AvatarSobreMim from "../../../assets/images/undraw_programming_re_kg9v.svg"


const SobreMim = () => {

    const StyledSobreMim = styled("div")(() => ({

        backgroundColor: "rgb(10, 10, 10)",
        display: "flex",
        alignItems: "center",
        color: "white",
        paddingTop: "20px",
        [theme.breakpoints.up('xs')]: {

            paddingBottom: "50px",

        },
        [theme.breakpoints.up('md')]: {

            paddingBottom: "100px",
            paddingTop: "50px",

        },

    }))

    const StyledSobreMimImg = styled("img")(() => ({
        color: "rgb(0, 173, 111)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0 0 48%",

        [theme.breakpoints.up('xs')]: {
            width: "0",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",

        },

    }))

    return (
        <>
        
            <StyledSobreMim>

                <Container maxWidth="lg">

                    <a href=""><h2 id="titleH2"> Olá, sou Danillo.  <p id="title"> Prazer em conhecê-lo. </p> </h2></a>


                    <Grid container spacing={2}>

                        <Grid item xs={12} md={5}>
                            <Box position="relative">

                                <Box position="relative" textAlign="center">

                                    <p id="paragrafoSobreMim">
                                        Sou um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais.
                                        Combinando um olho atento para design e um profundo conhecimento em tecnologia, me dedico a transformar
                                        ideias em interfaces intuitivas e impactantes. <br /> <br />
                                        Atualmente estou cursando análise e desenvolvimento de sistemas e focando no desenvolvimento FullStack.
                                    </p>

                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={12} md={7} position="relative" width="100%">
                            <Box width="100%">
                                <div id="Img"> <StyledSobreMimImg src={AvatarSobreMim} /></div>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>


            </StyledSobreMim>

        </>
    )
}

export default SobreMim