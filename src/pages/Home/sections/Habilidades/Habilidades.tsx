
import { Container, Grid, styled } from "@mui/material"
import "./Habilidades.css"
const Habilidades = () => {

    const StyledHabilidades = styled("div")(() => ({

        backgroundColor: "rgb(14, 14, 14)",
        color: "white",
        paddingTop: "50px",
        paddingBottom: "80px",
    }))

    return (

        <>

            <StyledHabilidades>

                <h2 id="titleh2Experiencias"> Minhas  <p id="titleExper" className="titleHabilidades"> Habilidades </p> </h2>


                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>

                            <ul>  <li className="liNomes">React JS</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">JavaScript</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">HTML5</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">CSS3</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">TypeScript</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                        </Grid>
                        <Grid item xs={12} md={6}>

                            <ul><li className="liNomes">Styled Components</li><li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">Sass</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul> <li className="liNomes">Git e Github</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul>  <li className="liNomes">WordPress</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                            <ul>  <li className="liNomes">Power BI</li> <li className="liPorcentagem">100%</li></ul>
                            <p><div className="SpanHabilidades"></div></p>

                        </Grid>
                    </Grid>
                </Container>

            </StyledHabilidades>

        </>
    )
}

export default Habilidades

