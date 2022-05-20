import {FormSelect} from 'react-bootstrap'
import React from 'react';

const ComboBoxBeneficiario = (props)=>{
    return(

    <FormSelect id='beneficiario'>
        <option>Selecione o beneficiario</option>
        {
        props.beneficiarios.map(beneficiario => (
            <option value={beneficiario.id}>{beneficiario.nome}</option>
        

        ))}

    </FormSelect>
)
}

export default ComboBoxBeneficiario