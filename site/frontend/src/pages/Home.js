import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.js'
import '../css/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            {/*<div class="home-info-container">

            </div>
            <div>
                
            </div>
            <div>
                
            </div>*/}
            <div class="principal">                
                <div class="campos-principal">  
                    <h1>Página Usuario</h1>                  
                    <Link class="link" to="/cadUsuario">Cadastrar Usuario</Link>                
                    <Link class="link" to="/ListaUsuario">Lista Usuários</Link>
                    <br/>
                    <h1>Página Campanha Doação</h1>
                    <Link class="link" to="/CadCampanhaDoacao"> Gerenciar Campanha de Doação</Link>
                    <br/>
                    {/*<h1>Página Doação</h1>                  
                    <Link class="link" to="/cadDoacao">Cadastrar Doação</Link>*/}
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

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;    