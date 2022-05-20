import {FormSelect} from 'react-bootstrap'
import React from 'react';

const ComboBoxCampanha = (props)=>{
    return(
        <FormSelect aria-label="Selecione a campanha desejada..." id='campanha'>
            <option>Selecione a campanha</option>
            {
            props.campanhas.map(campanha => (
                <option value={campanha.cod}>{campanha.nome}</option>
            

            ))
            
            }

        </FormSelect>
    )
}

export default ComboBoxCampanha