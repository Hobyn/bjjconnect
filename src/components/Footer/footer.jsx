// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 97,5%;
`;
const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Seu Site - Todos os direitos reservados
    </StyledFooter>
  );
};

export default Footer;