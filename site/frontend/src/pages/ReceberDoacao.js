import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import swal from 'sweetalert';
import api from '../service/api';
import '../css/Formularios.css';

export default function ReceberDoacao(props) {
    const dados = props.location.state;
    const [campos, setCampos] = React.useState('');
    const [doacao, setDoacao] = React.useState('');
    const [item, setItem] = React.useState();
    const [carregar, setCarregar] = React.useState(false);
    const usu = JSON.parse(localStorage.getItem('usuInfo'));

    const [doacao_id, setDoacao_Id] = React.useState();
    const [doacao_data, setDoacao_Data] = React.useState();
    const [doacao_local_id, setDoacao_Local_Id] = React.useState();
    const [campanha_id, setCampanha_Id] = React.useState();
    const [usu_id, setUsu_Id] = React.useState();
    const [status, setStatus] = React.useState();

    React.useEffect(()=>{
        if(!carregar) {
            setCampos({ 
                id: dados.doacao_id,                               
                item_nome: dados.item_nome,                        
                quatidade: dados.quatidade,                        
                doador_nome: dados.doador_nome
            });
            setDoacao_Id(dados.doacao_id);
            setDoacao_Data(dados.data);
            setDoacao_Local_Id(dados.local_id);
            setCampanha_Id(dados.campanha_id);
            setUsu_Id(dados.usu_id)


            // carregaItens();
            // carregaDoacao();
            setCarregar(true);            
        }
    });

    // async function carregaItens()
    // {
    //     const resp = await api.get(`/itensID/${campos.id}`);
    //     setItem(resp.data)
    //     console.log(resp.data)        
    // }

    // async function alterarItens()
    // {
    //     const resp = await api.put(`/itensDoacao`);
    //     setItem(resp.data)
    //     console.log(resp.data)        
    // }

    // async function carregaDoacao()
    // {
    //     try {
    //         const resp = await api.get(`/doacao/${campos.id}`);            
    //         setDoacao_Id(resp.data.id);  
    //         setDoacao_Data(resp.data.dataDoacao);
    //         setDoacao_Local_Id(resp.data.localDoacao_id);   
    //         setCampanha_Id(resp.data.campanha_id);
    //         setUsu_Id(resp.data.usu_id);
    //         setStatus(resp.data.status);;
           
            
    //     } catch(err) {
    //         console.log("ERRO " + err);
    //     }            
    // }

    function handleSubmit(e) {
        // carregaDoacao();
        e.preventDefault();
        const doacao = {
            id: doacao_id,
            dataDoacao: doacao_data,
            localDoacao_id: doacao_local_id,
            campanha_id: campanha_id,
            usu_id: usu_id,
            status: 'R'
        }
        console.log(doacao)
        api.put('/doacao', doacao);
    
        

        swal("Finalizado!", "Doação registrada com sucesso.", "success").then(function() {
            window.location = '/listaAgenda';
        });  
    }

    function voltar() {
        window.location = '/listaAgenda';
    }
    
    return (
        <div>
            <Header/>
            <div class="cadastro" style={{marginTop: '-75px'}}>
                <div class="campos-cadastro" >
                    <form action="POST" onSubmit={handleSubmit}>
                        <h1>Receber Doação</h1>
                        
                        <div id="nomeItemBox" class="inputBox">
                            <label class="label-bold" for="nomeItem">Nome do item: {campos.item_nome}</label>
                        </div>
                        <div id="nomeItemBox" class="inputBox">
                            <label class="label-bold" for="nomeItem">Nome do Doador: {campos.doador_nome}</label>
                        </div>
                        
                        <div id="quantidadeBox" class="inputBox">
                            <label class="label-bold" for="qtde">Quantidade:</label>
                            <input type="text" id="qtde" name="qtde" defaultValue={campos.quatidade}/>
                        </div>

                        <button class="btConfirmar" type="submit">Confirmar</button>
                    </form>
                    <br/>
                    <button class="btConfirmar" type="submit" onClick={voltar}>Voltar</button>

                </div>
            </div>    

            <Footer/>
        </div>
    );
}