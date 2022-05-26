import {FormSelect} from 'react-bootstrap'
import React from 'react';

const ComboBoxLocalDoacao = (props)=>{
    return(

            <>
                {
                props.locais.map(Local => (
                    <option value={Local.id}>`{Local.nomeRua}, {Local.numero}, {Local.cidade}/{Local.estado}`</option>
                ))
                
                }
            </>
    )
}

export default ComboBoxLocalDoacao