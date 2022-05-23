import {FormSelect} from 'react-bootstrap'
import React from 'react';

const ComboBoxInscricao = (props)=>{
    return(
        <FormSelect aria-label="Qual inscricao sera cancelada?..." id='inscrito'>
            <option>Selecione a inscricao</option>
            {
            props.inscricoes.map(inscricao => (
                <option value={inscricao.beneficiario.id,props.campanha.id}>{inscricao.beneficiario.nome} - {props.campanha.nome}</option>
            

            ))
            
            }

        </FormSelect>
    )
}

export default ComboBoxInscricao