import React from 'react';
import './Head.css';
import Logo from './img/logo.png';

function Header() {
    return (
    <header className="header">
    <img src={Logo} alt="Company Logo" className="logo" />
    <nav class="navbar">
        <ol>
            <a href="/" class="btn2">Inicio</a>
            <a href="/sobre" class="btn2">Sobre</a>
            <a href="/fotos" class="btn2">Fotos</a>
            <a href="/Busca" class= "btn">Reserva</a>
        </ol>
    </nav>
</header>
    );
}

export default Header;