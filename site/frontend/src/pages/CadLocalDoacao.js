import React from 'react';
import Header from '../components/Header';
import "../css/Formularios.css";
import "../css/Gerais.css";
import swal from 'sweetalert';
import api from '../service/api';

export default function FormCadLocalDoacao (tamanhoPass){

    const [id, setId] = React.useState('');
    const [nomeRua, setNomeRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [CodUsuario, setCodUsuario] = React.useState(37); // Mudar para pegar do Storage
    const[atualizando, setAtualizando] = React.useState(false);


    React.useEffect(()=>{
        if(!atualizando)
        atualiza()
    });

    function atualiza(){
        if(tamanhoPass.location.state === undefined)
            setAtualizando(false)   
        else
            {
                setAtualizando(true)
                setNomeRua(tamanhoPass.location.state.nomerua);
                setNumero(tamanhoPass.location.state.numero);
                setBairro(tamanhoPass.location.state.bairro);
                setCidade(tamanhoPass.location.state.cidade);
                setEstado(tamanhoPass.location.state.estado);
                setCodUsuario(tamanhoPass.location.state.usuarioId);
                setId(tamanhoPass.location.state.id);
            }             
    }

    function handler() {
        setNomeRua(document.getElementById('nomeRua').value);
        setNumero(document.getElementById('numero').value);
        setBairro(document.getElementById('bairro').value);
        setCidade(document.getElementById('cidade').value);
        setEstado(document.getElementById('estado').value);
        setCodUsuario(37); //não tem sessão implemetada ainda
        
    }


    function handleSubmit(e) {

        e.preventDefault();

        if(!atualizando)
        {
            const local = {
                id: 0,
                nomeRua: nomeRua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                usuarioId: CodUsuario
            };
            console.log(local);
            api.post('/localDoacao', local);
            swal("Finalizado!", "Cadastro local de doação efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            }
            );            
        }
        else
        {
            const local = {
                id: id,
                nomeRua: nomeRua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                usuarioId: CodUsuario
            };
            api.put('/localDoacao', local);
            swal("Finalizado!", "Alteração local de doação efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            }
            );
        }

        setId('');
        setBairro('');
        setCidade('');
        setEstado('');
        setNomeRua('');
        setNumero('');
        setCodUsuario(37); // Mudar para pegar do Storage
    }

    return(
        <div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastro Local de doação</h1>

                    <div class="box-nome">
                        <label for="nomerua">Nome da Rua</label>
                        <input type="text" name="nomeRua" id="nomeRua" placeholder="Digite o Nome da rua" required="true" defaultValue={nomeRua}/>
                    </div>

                    <div class="box-cpf">
                        <label for="numero">Numero</label>
                        <input type="text" name="numero" id="numero" placeholder="01" required="true" defaultValue={numero} />
                    </div>

                    <div class="box-senha">
                        <label for="nome">Bairro</label>
                        <input type="text" name="bairro" id="bairro" placeholder="Informe p bairro" required="true" defaultValue={bairro}/>
                    </div>

                    <div class="box-dtNasc">
                        <label for="cidade">Cidade</label>
                        <input type="text" name="cidade" id="cidade" placeholder="Informe a cidade" required="true" defaultValue={cidade}/>
                    </div>

                    <div class="box-endereco">
                        <label for="estado">Estado</label>
                        <input type="text" name="estado" id="estado" placeholder="Informe o estado" required="true" defaultValue={estado} />
                    </div>

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Confirmar</button>
                </form>
            </div>
        </div>
    );

}