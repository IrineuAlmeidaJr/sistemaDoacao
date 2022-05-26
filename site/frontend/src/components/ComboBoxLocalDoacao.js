import {FormSelect} from 'react-bootstrap'
import React from 'react';

const ComboBoxLocalDoacao = (props)=>{
    return(

            <>
                {
                props.locais.map(Local => (
                    // <option value={Local.id}>{Local.nomeRua}, {Local.numero}, {Local.cidade}/{Local.estado}</option>
                    <label for={Local.id}>
                            <input type="checkbox" name={Local.id} id={Local.id}/>                            
                            {Local.nomeRua}, {Local.numero}, {Local.cidade}/{Local.estado}                       
                    </label>
                
                ))
                
                }
            </>
    )
}

export default ComboBoxLocalDoacao