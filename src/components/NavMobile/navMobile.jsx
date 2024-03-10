import React from 'react';
import styled from 'styled-components';

const StyledMobileMenu = styled.nav`
background-color: rgba(0, 0, 0, 0.9);
color: white;
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 9999;
padding: 20px;
visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px; /* Mudei o right para left e ajustei o valor */
    color: white;
    font-size: 30px;
    background: none;
    border: none;
    cursor: pointer;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

    /* Adicione este estilo para o texto do botão */
    &:after {
        content: '×';
        color: white;
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px 20px;

    &:hover {
        background-color: #555;
    }
`;

const MobileMenu = ({ isOpen, toggleMenu }) => {
    return (
        <StyledMobileMenu isOpen={isOpen}>
            <CloseButton isOpen={isOpen} onClick={toggleMenu}></CloseButton>
            <StyledLink href="#">Home</StyledLink>
            <StyledLink href="#">Sobre</StyledLink>
            <StyledLink href="#">Galeria</StyledLink>
            <StyledLink href="#">Contato</StyledLink>
            <StyledLink href="#">Termos de uso</StyledLink>
            <StyledLink href="#">Política de privacidade</StyledLink>
        </StyledMobileMenu>
    );
};

export default MobileMenu;