import React from 'react';
import { MenuItem, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import './NavBar.css';

interface NavBarProps {
    setMenuIsVisible: (isVisible: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setMenuIsVisible }) => {
    const AppBarStyles = styled('div')(() => ({
        justifyContent: 'space-evenly',
        boxShadow: '0px 0px 10px rgba(240, 235, 235, 0.178)',
        width: '100%',
        height: '80px',
        zIndex: 1,
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10, 10, 10)',
        position: 'fixed',
    }));

    return (
        <AppBarStyles>
            <MenuItem><a className="LinksNavBar" href="#Inicio">Inicio</a></MenuItem>
            <MenuItem><a className="LinksNavBar" href="#NavSobreMim">Sobre mim</a></MenuItem>
            <MenuItem><a className="LinksNavBar" href="#NavExperiencias">Experiências</a></MenuItem>
            <MenuItem><a className="LinksNavBar" href="#NavProjetos">Projetos</a></MenuItem>
            <MenuItem><a className="LinksNavBar" href="#NavHabilidades">Habilidades</a></MenuItem>

            <div id="burguer">
                <MenuIcon 
                    onClick={() => setMenuIsVisible(true)}
                    style={{ cursor: 'pointer', color: 'white', fontSize: '35px' }}
                />
            </div> 
        </AppBarStyles>
    );
};

export default NavBar;
