import React from "react";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const Login = ()=>{
    //alert("Login provisório criado com o usuário 29")
    localStorage.setItem("usuario",29)
    return(
        <div>
            {/*<Redirect to="/"/>*/}
            <Header/>

            <div class="cadastro">
                <form class="campos-cadastro" >
                    <h3 class="titulo-style-1">Login</h3><br/>

                    <div class="inputBox">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email" size="15"/>
                    </div>

                    <div class="inputBox">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" size="15"/>
                    </div>

                    <div class="SFBox">
                        <p><Link class="linksf" to="/cadUsuario">Não tenho cadastro</Link> | <Link class="linksf" to="/esqueciSenha">Esqueci a senha</Link></p>
                    </div>

                    <br/><br/>
                    <button class="btConfirmar">Login</button>
                </form>
            </div>

            <Footer/>
        </div>
        
    )
}


export default Login;