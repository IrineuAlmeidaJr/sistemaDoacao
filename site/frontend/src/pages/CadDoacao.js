import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";

export default function FormCadDoacao(props){
    return(
    
        <div>
            <Header/>
            <div class="formBox">
                <form>
                    <h3 class="titulo-style-1">Cadastrar Doação (NÃO TERMINADO)</h3><br/>
                    {/* tipo da doacao - brinquedo, roupa etc - combo box */}
                    <label class="label-bold" for="tipoDoacao">Tipo da doação:</label><br/>
                    <select class="cb-tipoDoacao" >
                        <option value="Brinquedo">Brinquedo</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <br/><br/>

                    {/* quantidade - input text*/}
                    <label class="label-bold" for="qtdeDoacao">Quantidade:</label><br/>
                    <input class="input-style-1" type="text" id="qtdeDoacao" name="qtdeDoacao" size="15"/>

                    <br/><br/>

                    {/* descricao da doacao - input text*/}
                    <label class="label-bold" for="descDoacao">Descrição:</label><br/>
                    {/*<input class="input-style-1" type="text" id="descDoacao" name="descDoacao"/>
                    <br/><br/>*/}
                    <textarea class="ta-descricao" id="descDoacao" name="descDoacao"></textarea>
                    <br/><br/>
                    <button class="button-doacao" type="submit">Confirmar</button>
                </form>
            </div>
        </div>
    );
}