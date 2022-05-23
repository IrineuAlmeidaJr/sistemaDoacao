import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";

export default function EsqueciSenha (){
    return(
        <div>
            <Header/>
            <div class="cadastro">
                <form class="campos-cadastro">
                    <h3 class="titulo-style-1">Esqueci a senha</h3><br/>

                    <div class="inputBox">
                        <label for="recemail">E-mail:</label><br/>
                        <input type="text" id="recemail" name="recemail" size="15" placeholder="Informe o e-mail para recuperação"/>
                    </div>
                    

                    <br/><br/>
                    <button class="btConfirmar">Confirmar</button>
                </form>
            </div>
        </div>
    );
}