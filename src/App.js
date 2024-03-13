// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav/nav.jsx';
import SubNav from './components/Submenu/subNav.jsx';
import MobileMenu from './components/NavMobile/navMobile.jsx';
import Footer from './components/Footer/footer.jsx';
import AppRoutes from './Routes/Routes.js';

const ToggleButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 20px;
        left: 20px; /* Posicionamento do lado esquerdo */
        background-color: transparent;
        border: none;
        font-size: 24px;
        color: black;
        z-index: 10000;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className="App">
          <Nav />
          <SubNav />
          <ToggleButton onClick={toggleMenu}>
              {isMenuOpen ? '' : '☰'}
          </ToggleButton>
          <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <AppRoutes />
          <Footer/>
      </div>
  );
}

export default App;