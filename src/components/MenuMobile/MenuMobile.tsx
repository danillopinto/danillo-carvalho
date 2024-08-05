import { useEffect } from "react";
import { Container } from "./MenuMobileStyles"
import CloseIcon from '@mui/icons-material/Close';

interface MenuMobileProps {
    menuIsVisible: boolean;
    setMenuIsVisible: (visible: boolean) => void;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) {

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);


    return (

        <Container isVisible={menuIsVisible}>

            <CloseIcon
                onClick={() => setMenuIsVisible(false)}
                role="button"
                aria-label="Close menu"
                style={{ cursor: "pointer", color: "white", fontSize: "40px" }}
            />


            <a className="LinksNavBar2" href="#Inicio">Inicio</a>
            <a className="LinksNavBar2" href="#NavSobreMim">Sobre mim</a>
            <a className="LinksNavBar2" href="#NavExperiencias">Experiências</a>
            <a className="LinksNavBar2" href="#NavProjetos">Projetos</a>
            <a className="LinksNavBar2" href="#NavHabilidades">Habilidades</a>

        </Container>

    )
}

export default MenuMobile
