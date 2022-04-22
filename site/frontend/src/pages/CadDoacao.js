import React from 'react';

export default function FormCadDoacao(props){
    return(
        <div>
            <form>
                {/* tipo da doacao - brinquedo, roupa etc - combo box */}
                <label for="tipoDoacao">Tipo da doação:</label>
                <select>
                    <option value="Brinquedo">Brinquedo</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Outros">Outros</option>
                </select>

                {/* quantidade - input text*/}
                <label for="qtdeDoacao">Quantidade:</label>
                <input type="text" id="qtdeDoacao" name="qtdeDoacao"/>

                {/* descricao da doacao - input text*/}
                <label for="descDoacao">Descrição:</label>
                <input type="text" id="descDoacao" name="descDoacao"/>
            </form>
            
        </div>
    );
}