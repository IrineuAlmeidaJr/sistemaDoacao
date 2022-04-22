import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {    
    return (
        <header>        
        <nav>
            <h1 class="box-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/940/940817.png" alt="Logo Empresa"/>
            </h1>    
            <div class="box-titulo">
                <h1 class="titulo">Amigos do Papai Noel</h1>
                <div class="sub-titulo">
                  <a href="https://pt-br.facebook.com">amigospapainoel.com</a>
                  <button class="botao-seguir"> + Seguir</button> 
                </div>
            </div>
            
            <Link class="botao-voltar" to="/">Voltar</Link>     
            <Link class="botao-login" to="/">Log In</Link>  
            
        </nav>  
    </header>
    )
}

export default Header;