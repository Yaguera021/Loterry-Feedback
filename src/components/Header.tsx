import React from 'react';
import logo from '../images/logo.png';
import './style/Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>Lotérica Dalila</h1>
      <img src={logo} className='logo-image' alt="logo-caixa" />
    </header>
  );
};

export default Header;