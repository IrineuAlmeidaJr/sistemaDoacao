import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import swal from 'sweetalert';
import '../css/Formularios.css';

export default function AgendarDoacao(props) {
    function checkLogged()
    {
        const usu = JSON.parse(localStorage.getItem("usuInfo"));
        //console.log(usu.id);
        if(usu.id == -1)
        {
            swal("Não logado!", "Proseguir para fazer o login?", "warning", {buttons: ["Não", "Sim"]})
            .then((sim) => {
                if (sim) {
                  window.location = "/login";
                  
                } else {
                    window.location = "/";
                }});
        }
    }
    
    function checkTipoDoacao()
    {
        let tipo = document.getElementById("tipoDoacao").value;
        console.log(tipo);
        let uniMedida = document.getElementById("unidadeMedidaBox");
        let tamanho = document.getElementById("tamanhoBox");
        let genero = document.getElementById("generoBox");
        let quantidade = document.getElementById("quantidadeBox");
        
        if(tipo == "Brinquedo")
        {
            uniMedida.innerHTML = "";
            tamanho.innerHTML = "";

            quantidade.innerHTML = `<div class="inputBox"><label class="label-bold" for="qtde">Quantidade:</label>
                                    <input type="text" id="qtde" name="qtde" placeholder="Informe a quantidade de brinquedos"/></div>`;
            
            genero.innerHTML = `<div class="comboBox"><label class="label-bold" for="genero">Genero:</label>
                                <select id="genero">
                                    <option value="">Selecione o genero</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select><br/></div>`;
        }
        else
        if(tipo == "Roupas")
        {
            uniMedida.innerHTML = "";

            quantidade.innerHTML = `<div class="inputBox"><label class="label-bold" for="qtde">Quantidade:</label>
                                    <input type="text" id="qtde" name="qtde" placeholder="Informe a quantidade de roupas"/></div>`;
                    
            tamanho.innerHTML = `<div class="comboBox"><label class="label-bold" for="tamanho">Tamanho:</label>
                                <select id="tamanho">
                                    <option value="">Selecione o tamanho</option>
                                    <option value="P">P</option>
                                    <option value="M">M</option>
                                    <option value="G">G</option>
                                </select><br/></div>`;
            
            genero.innerHTML = `<div class="comboBox"><label class="label-bold" for="genero">Genero:</label>
                                <select id="genero">
                                    <option value="">Selecione o genero</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select><br/></div>`;
        }
        else
        if(tipo == "Alimento")
        {
            tamanho.innerHTML = "";
            genero.innerHTML = "";
            quantidade.innerHTML = "";

            uniMedida.innerHTML = `<div class="comboBox"><label class="label-bold" for="uniMedida">Unidade de medida:</label>
                                    <select id="uniMedida">
                                        <option value="">Selecione o tipo de medida</option>
                                        <option value="Gramas">Gramas</option>
                                        <option value="Kilogramas">Kilogramas</option>
                                        <option value="Outros">Outros</option>
                                    </select><br/></div>`;
        }
        else
        {
            tamanho.innerHTML = "";
            genero.innerHTML = "";
            quantidade.innerHTML = "";
            uniMedida.innerHTML = "";
        }
    }
    
    return (
        <div onLoad={checkLogged}>
            <Header/>

            <div class="cadastro" >
                <form class="campos-cadastro">
                    <h1>Agendar doação</h1>
                    <div id="nomeItemBox" class="inputBox">
                        <label class="label-bold" for="nomeItem">Nome do item:</label>
                        <input type="text" id="nomeItem" name="nomeItem" placeholder="Informe um nome para a doação"/>
                    </div>
                    <br/>

                    
                    <div id="tipoDoacaoBox" class="comboBox">
                        <label class="label-bold" for="tipoDoacao">Tipo da doação:</label>
                        <select id="tipoDoacao" onChange={checkTipoDoacao}>
                            <option value="">Selecione o tipo de doação</option>
                            <option value="Brinquedo">Brinquedo</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Alimento">Alimento</option>
                        </select>
                    </div>
                    
                    <div id="quantidadeBox" class="inputBox">
                        {/*<label class="label-bold" for="qtde">Quantidade:</label>
                        <input type="text" id="qtde" name="qtde"/>*/}
                    </div>

                    <div id="unidadeMedidaBox">
                        {/*<label class="label-bold" for="uniMedida">Unidade de medida:</label><br/>
                        <select class="cb-tipoDoacao" id="uniMedida">
                            <option value="Gramas">Gramas</option>
                            <option value="Kilogramas">Kilogramas</option>
                            <option value="Outros">Outros</option>
                        </select>*/}
                    </div>
                    

                    <div id="tamanhoBox">
                        {/*<label class="label-bold" for="tamanho">Tamanho:</label><br/>
                        <select class="cb-tipoDoacao" id="tamanho">
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                        </select>*/}
                    </div>
                    

                    <div id="generoBox">
                        {/*<label class="label-bold" for="genero">Genero:</label><br/>
                        <select class="cb-tipoDoacao" id="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>*/}
                    </div>
                    

                    <div id="localDoacaoBox" class="comboBox">
                        <label class="label-bold" for="localDoacao">Local de doação:</label>
                        <select  id="localDoacao">
                            <option value="">Selecione um local de doação</option>
                            <option value="Brinquedo">St. jordan, 345 - New York</option>
                            <option value="Roupas">Passion avenue - 789 - PR</option>
                        </select>
                    </div>
                    <br/>

                    <div id="dtDoacaobBox" class="inputBox">
                        <label class="label-bold" for="dtDoacao">Data da doação:</label>
                        <input type="date" name="dtDoacao" id="dtDoacao" />
                    </div>
                    <br/>

                    <button class="btConfirmar">Confirmar</button>
                </form>
            </div>

            <Footer/>
        </div>
    );
}