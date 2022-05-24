import React from "react";
import { Link } from 'react-router-dom';
//import { Redirect } from "react-router";
import api from '../service/api'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


//const localRecursos = 'http://localhost:4000/usuario'

const Login = ()=>{
    //alert("Login provisório criado com o usuário 29")
    //localStorage.setItem("usuario",29);
    const [login, setLogin] = React.useState('');
    //const[VerificaLogin, setVerificaLogin] = React.useState({});
    let alert = document.getElementById("loginForm-alert");

    function handler () {
        //console.log('entrou handler');
        setLogin({email: document.getElementById("email").value, senha: document.getElementById("senha").value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        //console.log('entrou handleSubmit');
        //let emailBusca;
        try {
            const response = await api.get(`/usuarioLogin/${login.email}`);
            //response = response.json();
            //console.log('voltou response');
            console.log(response.data);
            if(response.data.email !== undefined)
            {
                
                if(response.data.senha === login.senha)
                {
                    localStorage.setItem("usuInfo", JSON.stringify(response.data));
                    //<Redirect to="/"/>
                    alert.innerHTML = "";
                    //window.location = "/";
                    //alert('sucesso:');

                }
                else
                {
                    alert.innerHTML = "<p>Senha incorreta, informe novamente!</p>";
                }
                
            }
            else
            {
                alert.innerHTML = "<p>Email não encontrado, informe novamente!</p>";
            }
        } catch(err) {
            console.log(err);
        }       
    }
    return(
        <div>
            {/*<Redirect to="/"/>*/}
            <Header/>

            <div class="cadastro">
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h3 class="titulo-style-1">Login</h3><br/>

                    <div class="inputBox">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email" size="15"/>
                    </div>

                    <div class="inputBox">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" size="15"/>
                    </div>

                    <div id="loginForm-alert">

                    </div>

                    <div class="SFBox">
                        <p><Link class="linksf" to="/cadUsuario">Não tenho cadastro</Link> | <Link class="linksf" to="/esqueciSenha">Esqueci a senha</Link></p>
                    </div>

                    <br/><br/>
                    <button class="btConfirmar" onClick={handler}>Login</button>
                </form>
            </div>

            <Footer/>
        </div>
        
    )
}


export default Login;