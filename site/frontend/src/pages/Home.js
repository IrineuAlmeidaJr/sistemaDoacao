import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
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
                </div>
            </div>
        </div>
    );
}

export default Home;    