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
            /*if(id != 2 && id != 0 )
            {
                menu.innerHTML = `  <li><Link to="/">Home</Link></li>

                                    <li><Link to="/agendarDoacao">Agendar</Link></li>

                                    <li><a href="">Inscrição</a>
                                        <ul> {/*ul com visibility: hidden, aparece apenas em hover}
                                            <li><Link to="/realizarinscricao">Inscrever</Link></li>
                                            <li><Link to="/cancelarinscricao">Cancelar</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li><a href="">Cadastrar</a>
                                        <ul> {/*ul com visibility: hidden, aparece apenas em hover}
                                            <li><Link to="/cadUsuario">Usuario</Link></li>
                                            <li><Link to="/cadTipoDoacao">TipoDoação</Link></li>
                                            <li><Link to="/cadTamanho">Tamanho</Link></li>
                                            <li><Link to="/cadBeneficiario">Beneficiário</Link></li>
                                            <li><Link to="/cadLocalDoacao">LocalDoação</Link></li>
                                            <li><Link to="/cadCampanha">CampanhaDoação</Link></li>
                                        </ul>
                                    </li>

                                    <li><a href="">Listar</a>
                                        <ul> {/*ul com visibility: hidden, aparece apenas em hover}
                                            <li><Link to="/listaUsuario">Usuario</Link></li>
                                            <li><Link to="/listaTipoDoacao">TipoDoação</Link></li>
                                            <li><Link to="/listaTamanho">Tamanho</Link></li>
                                            <li><Link to="/listaBeneficiarios">Beneficiário</Link></li>
                                            <li><Link to="/listaLocalDoacao">LocalDoação</Link></li>
                                            <li><Link to="/listaCampanha">CampanhaDoação</Link></li>
                                        </ul>
                                    </li>`;
            }
            else
            {
                menu.innerHTML = `  <li><Link to="/">Home</Link></li>

                                    <li><Link to="/agendarDoacao">Agendar</Link></li>

                                    <li><a href="">Inscrição</a>
                                        <ul> {/*ul com visibility: hidden, aparece apenas em hover}
                                            <li><Link to="/realizarinscricao">Inscrever</Link></li>
                                            <li><Link to="/cancelarinscricao">Cancelar</Link></li>
                                        </ul>
                                    </li>`;
            }*/
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
                    {/*<li><div class="homepageBox"><Link><img class="home-img" src={hmw}/></Link></div></li>*/}
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/agendarDoacao">Agendar</Link></li>

                    <li><a href="">Inscrição</a>
                        <ul> {/*ul com visibility: hidden, aparece apenas em hover*/}
                            <li><Link to="/realizarinscricao">Inscrever</Link></li>
                            <li><Link to="/cancelarinscricao">Cancelar</Link></li>
                        </ul>
                    </li>
                    
                    <li><a href="">Cadastrar</a>
                        <ul> {/*ul com visibility: hidden, aparece apenas em hover*/}
                            <li><Link to="/cadUsuario">Usuario</Link></li>
                            <li><Link to="/cadTipoDoacao">TipoDoação</Link></li>
                            <li><Link to="/cadTamanho">Tamanho</Link></li>
                            <li><Link to="/cadBeneficiario">Beneficiário</Link></li>
                            <li><Link to="/cadLocalDoacao">LocalDoação</Link></li>
                            <li><Link to="/cadCampanha">CampanhaDoação</Link></li>
                        </ul>
                    </li>

                    <li><a href="">Listar</a>
                        <ul> {/*ul com visibility: hidden, aparece apenas em hover*/}
                            <li><Link to="/listaUsuario">Usuario</Link></li>
                            <li><Link to="/listaTipoDoacao">TipoDoação</Link></li>
                            <li><Link to="/listaTamanho">Tamanho</Link></li>
                            <li><Link to="/listaBeneficiarios">Beneficiário</Link></li>
                            <li><Link to="/listaLocalDoacao">LocalDoação</Link></li>
                            <li><Link to="/listaCampanha">CampanhaDoação</Link></li>
                        </ul>
                    </li>

                    {/*<li><a href="">Headset</a></li>*/}
                </ul>
            </nav>
            </header>
            
        </section>
        
    )
}

export default Header;