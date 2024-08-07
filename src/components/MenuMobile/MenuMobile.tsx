import { useEffect } from "react";
import { Container } from "./MenuMobileStyles";
import CloseIcon from '@mui/icons-material/Close';

interface MenuMobileProps {
    menuIsVisible: boolean;
    setMenuIsVisible: (visible: boolean) => void;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) {

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
        document.body.style.paddingRight = menuIsVisible ? '15px' : '0'; // Ajustar conforme necessário
        return () => {
            document.body.style.overflowY = 'auto';
            document.body.style.paddingRight = '0';
        };
    }, [menuIsVisible]);

    const handleMenuItemClick = () => {
        setMenuIsVisible(false); // Fecha o menu quando um item de menu é clicado
    };

    return (
        <Container isVisible={menuIsVisible}>
            <CloseIcon
                onClick={() => setMenuIsVisible(false)}
                role="button"
                aria-label="Close menu"
                style={{ cursor: "pointer", color: "white", fontSize: "40px" }}
            />
            <a className="LinksNavBar2" href="#Inicio" onClick={handleMenuItemClick}>Inicio</a>
            <a className="LinksNavBar2" href="#NavSobreMim" onClick={handleMenuItemClick}>Sobre mim</a>
            <a className="LinksNavBar2" href="#NavExperiencias" onClick={handleMenuItemClick}>Experiências</a>
            <a className="LinksNavBar2" href="#NavProjetos" onClick={handleMenuItemClick}>Projetos</a>
            <a className="LinksNavBar2" href="#NavHabilidades" onClick={handleMenuItemClick}>Habilidades</a>
        </Container>
    );
}

export default MenuMobile;
