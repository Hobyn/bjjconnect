// SubNav.jsx
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: ${(props) => (props.top ? '#333' : '#555')};
    color: white;
    padding: 30px;
    display: flex;
    justify-content: ${(props) => (props.top ? 'flex-end' : 'center')};

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px 20px;

    &:hover {
        background-color: #777;
    }
`;

const SubNav = () => {
    return (
        <StyledNav>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">BJJ CONNECT</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Nossa História</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Conheça o BJJ CONNECT</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">IDEALIZADORES</StyledLink></li>
                <li style={{ display: 'inline-block' }}><StyledLink href="#">Contato</StyledLink></li>
            </ul>
        </StyledNav>
    );
};

export default SubNav;
