import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.js'
import '../css/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div class="home-info-container1">
                <div class="imgC1"></div>

                <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                
            </div>

            <div class="home-info-container2">
                <div class="imgC2">

                </div>

                <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="home-info-container1">
                <div class="imgC3"></div>

                <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div class="home-info-container3">
                <div class="curtain">
                    <div class="home-donate">
                        <p class="donate-text">Seja a diferença, doe agora mesmo.</p>
                        <br/>
                        <br/>
                        <br/>
                        <Link class="bt-donate" to="/agendarDoacao">Doar</Link>
                    </div>
                    
                </div>
                
            </div>
            
            
            
            
            {/*<div class="principal">                
                <div class="campos-principal">  
                    <h1>Página Usuario</h1>                  
                    <Link class="link" to="/cadUsuario">Cadastrar Usuario</Link>                
                    <Link class="link" to="/ListaUsuario">Lista Usuários</Link>
                    <br/>
                    <h1>Página Campanha Doação</h1>
                    <Link class="link" to="/CadCampanhaDoacao"> Gerenciar Campanha de Doação</Link>
                    <br/>
                    {/*<h1>Página Doação</h1>                  
                    <Link class="link" to="/cadDoacao">Cadastrar Doação</Link>
                    <h1>Página Tipo Doação</h1>                  
                    <Link class="link" to="/cadTipoDoacao">Cadastrar Tipo de Doação</Link>
                    <Link class="link" to="/listaTipoDoacao">Listar tipo de doação</Link>
                    <Link class="link" to="/listaBeneficiarios">Listar Beneficiários</Link>
                    <Link class="link" to="/cadLocalDoacao">Cadastrar local de doação</Link>
                    <Link class="link" to="/listaLocalDoacao">Listar local de doação</Link>
                    <Link class="link" to="/cadCampanha">Cadastrar Capanha de doação</Link>
                    <Link class="link" to="/listaCampanha">Listar Campanha de doação</Link>
                    <Link class="link" to="/cadBeneficiario">Cadastrar Beneficiário</Link>

                    <h1>Página Tamanho</h1> 
                    <Link class="link" to="/cadTamanho">Cadastrar Tamanho</Link>
                    <Link class="link" to="/listaTamanho">Listar tamanho</Link> 

                    <h1>Realizar inscricao na campanha</h1>
                    <Link class="link" to="/realizarinscricao">Realizar Inscrição de beneficiario</Link>

                </div>
            </div>*/}
            <Footer/>
        </div>
    );
}

export default Home;    