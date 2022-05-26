import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/Gerais.css';
import logoimg from "../images/logo/logots.png";
import hmw from "../images/logo/homepage-white.png";
import nouser from "../images/user/no-user-gray.png";

const Header = () => {    
    const usu = JSON.parse(localStorage.getItem("usuInfo"));
    //console.log(usu);
    //const id = localStorage.getItem("usuarioId");
    //const tipo = localStorage.getItem("usuarioId");
    
    function checkID (){
        
        let user = document.getElementById("user");
        let menu = document.getElementById("menuItens");
        if(usu.id >= 0 )
        {
            user.innerHTML = `logout`;
            if(usu.tipo == 1 || usu.tipo == 3 ) // 1 = colaborador, 3 = responsavel
            {
                menu.innerHTML = `  <li><a href='http://localhost:3000/'>Home</a></li>

                                    <li><a href='http://localhost:3000/agendarDoacao'>Agendar</a></li>

                                    <li><a href="">Inscrição</a>
                                        <ul> 
                                            <li><a href="http://localhost:3000/realizarinscricao">Inscrever</a></li>
                                            <li><a href="http://localhost:3000/cancelarinscricao">Cancelar</a></li>
                                        </ul>
                                    </li>
                                    
                                    <li><a href="">Cadastrar</a>
                                        <ul> 
                                            <li><a href="http://localhost:3000/cadUsuario">Usuario</a></li>
                                            <li><a href="http://localhost:3000/cadTipoDoacao">TipoDoação</a></li>
                                            <li><a href="http://localhost:3000/cadTamanho">Tamanho</a></li>
                                            <li><a href="http://localhost:3000/cadBeneficiario">Beneficiário</a></li>
                                            <li><a href="http://localhost:3000/cadLocalDoacao">LocalDoação</a></li>
                                            <li><a href="http://localhost:3000/cadCampanha">CampanhaDoação</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="">Agenda</a>
                                    <ul>
                                        <li><a href="http://localhost:3000/listaAgenda">Agendas de doação</a></li>
                                    </ul>
                                    <li><a href="">Listar</a>
                                        <ul> 
                                            <li><a href="http://localhost:3000/listaUsuario">Usuario</a></li>
                                            <li><a href="http://localhost:3000/listaTipoDoacao">TipoDoação</a></li>
                                            <li><a href="http://localhost:3000/listaTamanho">Tamanho</a></li>
                                            <li><a href="http://localhost:3000/listaBeneficiarios">Beneficiário</a></li>
                                            <li><a href="http://localhost:3000/listaLocalDoacao">LocalDoação</a></li>
                                            <li><a href="http://localhost:3000/listaCampanha">CampanhaDoação</a></li>
                                        </ul>
                                    </li>`;
                                    
            }
            else
            {
                menu.innerHTML = `  <li><a href='http://localhost:3000/'>Home</a></li>

                                    <li><a href='http://localhost:3000/agendarDoacao'>Agendar</a></li>

                                    <li><a href="">Inscrição</a>
                                        <ul> 
                                            <li><a href="http://localhost:3000/realizarinscricao">Inscrever</a></li>
                                            <li><a href="http://localhost:3000/cancelarinscricao">Cancelar</a></li>
                                        </ul>
                                    </li>`;
            }
        }
        else if(usu.id == -1)
        {
            menu.innerHTML = `  <li><a href='http://localhost:3000/'>Home</a></li>

                                    <li><a href='http://localhost:3000/agendarDoacao'>Agendar</a></li>

                                    <li><a href="">Inscrição</a>
                                        <ul> 
                                            <li><a href="http://localhost:3000/realizarinscricao">Inscrever</a></li>
                                            <li><a href="http://localhost:3000/cancelarinscricao">Cancelar</a></li>
                                        </ul>
                                    </li>`;
        }
    }
    
    function destiny(){
        if(usu.id >= 0 )
        {
            return "/logout"
        }
        else
        {
            return "/login"
        }
    }
    
    return (
        <section onLoad={checkID}>
            <header id="headerMainContainer">        
                <nav id="headerContainer">
                    
                    <div class="logoContainer">
                        <Link to="/"><img class="topLogo" src={logoimg} alt="Logo Empresa"/></Link>
                    </div>
                    
                        
                    <div class="box-titulo">
                        <h1 class="titulo">Amigos do Papai Noel</h1>
                        <div class="sub-titulo">
                        <a href="https://pt-br.facebook.com" target="_blank">amigospapainoel.com</a>
                        <button class="botao-seguir"> + Seguir</button> 
                        </div>
                    </div>
                    
                    {/*<Link class="botao-voltar" to="/">Voltar</Link>*/}
                    <div class="loginContainer">
                        <div class="login-userimg">
                            <img src={nouser} alt="Foto de usuário"/>
                        </div>

                        <div>
                            <Link id="user" to={destiny} class="bold bt-login">Login</Link>
                        </div>
                        
                    </div>
                        
                </nav>  

                <nav id="Menu" class="bold"> {/*Menu de Navegação Dropdown*/}
                <ul id="menuItens">
                    
                    {/*<li><Link to="/">Home</Link></li>

                    <li><Link to="/agendarDoacao">Agendar</Link></li>

                    <li><a href="">Inscrição</a>
                        <ul> 
                            <li><Link to="/realizarinscricao">Inscrever</Link></li>
                            <li><Link to="/cancelarinscricao">Cancelar</Link></li>
                        </ul>
                    </li>
                    
                    <li><a href="">Cadastrar</a>
                        <ul> 
                            <li><Link to="/cadUsuario">Usuario</Link></li>
                            <li><Link to="/cadTipoDoacao">TipoDoação</Link></li>
                            <li><Link to="/cadTamanho">Tamanho</Link></li>
                            <li><Link to="/cadBeneficiario">Beneficiário</Link></li>
                            <li><Link to="/cadLocalDoacao">LocalDoação</Link></li>
                            <li><Link to="/cadCampanha">CampanhaDoação</Link></li>
                        </ul>
                    </li>

                    <li><a href="">Listar</a>
                        <ul> 
                            <li><Link to="/listaUsuario">Usuario</Link></li>
                            <li><Link to="/listaTipoDoacao">TipoDoação</Link></li>
                            <li><Link to="/listaTamanho">Tamanho</Link></li>
                            <li><Link to="/listaBeneficiarios">Beneficiário</Link></li>
                            <li><Link to="/listaLocalDoacao">LocalDoação</Link></li>
                            <li><Link to="/listaCampanha">CampanhaDoação</Link></li>
                        </ul>
    </li>*/}

                    
                </ul>
            </nav>
            </header>
            
        </section>
        
    )
}

export default Header;