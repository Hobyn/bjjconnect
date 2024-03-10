// Nav.jsx
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: #333;
    color: white;
    padding: 30px;

    @media (max-width: 768px) {
        display: none;
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


const Nav = () => {
    return (
        <StyledNav>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Blog</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Eventos</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Certificação</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Para instrutores</StyledLink></li>
            </ul>
        </StyledNav>
    );
};

export default Nav;
