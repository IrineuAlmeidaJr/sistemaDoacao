import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import swal from 'sweetalert';
import api from '../service/api';
import '../css/Formularios.css';

export default function AgendarDoacao(doa) {
    const [doacao, setDoacao] = React.useState('');
    const [itens, setItens] = React.useState('');
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);
    const usu = JSON.parse(localStorage.getItem('usuInfo'));
    React.useEffect(()=>{
        if(!estaAtualizando)
            atualiza()
    });

    function atualiza(){
        if(doa.location.state === undefined){
            setEstaAtualizando(false);
        }
        else{
            setEstaAtualizando(true);
            setDoacao({ id: doa.location.state.doacao_id, 
                        dataDoacao: doa.location.state.doacao_dataDoacao,
                        localDoacao: doa.location.state.doacao_localDoacao_id,
                        campanha: doa.location.state.campanha_id,
                        usuario: doa.location.state.usu_id,
                        status: doa.location.state.doacao_status});
            
            //setItens({});
        }
    }

    function getQtdeValue()
    {
        let qtde = document.getElementById("qtde").value;

        if(qtde === undefined)
        {
            qtde = 0;
        }

        return qtde;
    }

    async function getTamValue()
    {
        let tam;
        //let tam = document.getElementById('tamanho').value;
        if(document.getElementById('tamanho').value == null)
        {
            let resp = await api.get(`/tamanhoNome/${'Outros'}`);
            let tam = resp.data[0].tamanho_id;
        }

        return tam;
    }

    async function getUniValue()
    {
        let uni = document.getElementById('uniMedida').value;
        if(uni === undefined)
        {
            let resp = await api.get(`/unidadeNome/${'Outros'}`);
            uni = resp.data[0].unidade_id;
        }

        return uni;
    }

    async function getGenValue()
    {
        let gen = document.getElementById('genero').value;
        if(gen === undefined)
        {
            let resp = await api.get(`/generoNome/${'Outros'}`);
            gen = resp.data[0].genero_id;
        }

        return gen;
    }

    async function getLastIncludedDonation()
    {
        //let id;
        let resp = await api.get('/doacaoUltimo');
        //console.log(resp.data.id);
        //id = resp.data.id;
        //console.log(id);
        return resp.data;
    }

    function handler() {
        if(!estaAtualizando){
            //setNome({nome:document.getElementById('tipoDoacao').value});
            //console.log('entrou');
            setDoacao({ id: 0,
                dataDoacao: document.getElementById('dtDoacao').value,
                localDoacao: document.getElementById('localDoacao').value,
                campanha: document.getElementById('campanhaDoacao').value,
                usuario: usu.id,
                status: "A"});
            
            
            
            setItens({
                id: 0,
                nome: document.getElementById('nomeItem').value,
                quantidade: document.getElementById("qtde").value,
                tipoDoacao: document.getElementById('tipoDoacao').value,
                uniMedida: document.getElementById('uniMedida').value,
                tamanho: document.getElementById('tamanho').value,
                genero: document.getElementById('genero').value,
                doacaoId: 0
            });
            
            console.log(itens);
        }
        else{
            console.log('entrou');
            setDoacao({ id: 0,
                dataDoacao: document.getElementById('dtDoacao').value,
                localDoacao: document.getElementById('localDoacao').value,
                campanha: document.getElementById('campanhaDoacao').value,
                usuario: localStorage.getItem("usuInfo").id,
                status: document.getElementById('tipoDoacao').value});
            
            console.log(doacao);
        }        
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!estaAtualizando){ 
            const doacaoObj = {
                dataDoacao: doacao.dataDoacao,
                localDoacao_id: doacao.localDoacao,
                campanha_id: doacao.campanha,
                usu_id: doacao.usuario,
                status: doacao.status
            };
            console.log(doacaoObj);
            api.post('/doacao', doacaoObj);

            //console.log(itens);
            let res = getLastIncludedDonation();//await api.get('/doacaoUltimo');
            //console.log(doaId.data);
            const itensObj = {
                id: itens.id,
                nome: itens.nome,
                quantidade: itens.quantidade,
                tipoDoacao_id: itens.tipoDoacao,
                unidadeMedida_id: itens.uniMedida,
                tamanho_id: itens.tamanho,
                genero_id: itens.genero,
                doacao_id: res.data.id
            };
            console.log(itensObj);
            api.post('/itensDoacao', itensObj);

            swal("Finalizado!", "Agendamento efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });  
        } else {
            const doacaoObj = {
                id: doa.location.state.doacao_id, 
                dataDoacao: doacao.dataDoacao,
                localDoacao: doacao.localDoacao,
                campanha: doacao.campanha,
                usuario: doacao.usuario,
                status: doacao.status
            };
            api.put('/doacao', doacaoObj); 
            swal("Finalizado!", "Alteração do agendamento efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });
        }

        //console.log(nome); 

        setDoacao('');
        setItens('');

         
        

    }

    function init(){
        checkLogged();
        loadTipoDoacaoBox();
        loadCampanhaDoacaoBox();
        loadLocalDoacaoBox();
        loadGeneroContainer();
        loadTamanhoContainer();
        loadUniMedidaContainer();
    }

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

    async function loadTipoDoacaoBox(){
        let tp = document.getElementById('tipoDoacao');
        let opt = "";
        try{
            const response = await api.get('/tipoDoacao');
            //console.log(response.data);
            opt = '<option value="0" selected disabled>Selecione o tipo de doação</option>';
            for(let i=0; i<response.data.length; i++)
            {
                //console.log(response.data[i].id +" "+ response.data[i].nome);
                opt += `<option value="${response.data[i].id}">${response.data[i].nome}</option>`;
            }
            tp.innerHTML = opt;
        } catch(err){
            console.log(err);
        }
        
        //setListaTipos(response.data);
    }

    async function loadCampanhaDoacaoBox(){
        let c = document.getElementById('campanhaDoacao');
        let opt = "";
        try{
            const response = await api.get('/campanhaDoacao');
            //console.log(response.data);
            opt = '<option value="0" selected disabled>Selecione campanha de doação</option>';
            for(let i=0; i<response.data.length; i++)
            {
                //console.log(response.data[0]);
                opt += `<option value="${response.data[i].cod}">${response.data[i].nome}</option>`;
            }
            c.innerHTML = opt;
        } catch(err){
            console.log(err);
        }
        
        //setListaTipos(response.data);
    }

    async function loadLocalDoacaoBox(){
        let ld = document.getElementById('localDoacao');
        let opt = "";
        let end = "";
        try{
            const response = await api.get('/localDoacao');
            //console.log(response.data);
            opt = '<option value="0" selected disabled>Selecione o local de doação</option>';
            for(let i=0; i<response.data.length; i++)
            {
                end = `${response.data[i].nomeRua} Nº ${response.data[i].numero}, ${response.data[i].bairro}, ${response.data[i].cidade} - ${response.data[i].estado}`;
                //console.log(response.data[i].id +" "+ response.data[i].nome);
                opt += `<option value="${response.data[i].id}">${end}</option>`;
            }
            ld.innerHTML = opt;
        } catch(err){
            console.log(err);
        }
        
        //setListaTipos(response.data);
    }

    function loadQuantidadeContainer()
    {
        let quantidade = document.getElementById("quantidadeBox");
        quantidade.innerHTML = `<div class="inputBox"><label class="label-bold" for="qtde">Quantidade:</label>
                                    <input type="text" id="qtde" name="qtde" placeholder="Informe a quantidade"/></div>`;
    }

    async function loadGeneroContainer()
    {
        let genero = document.getElementById("generoBox");
        let str = "";
        str = `<div class="comboBox"><label class="label-bold" for="genero">Genero:</label>
                                <select id="genero">`;
        try{
            const response = await api.get('/genero');
            str += '<option value="0" selected disabled>Selecione o genero</option>';
            for(let i=0; i<response.data.length; i++)
            {
                str += `<option value="${response.data[i].id}">${response.data[i].nome}</option>`;
            }
            str += "</select><br/></div>";
            genero.innerHTML = str ;
        }catch(err){
            console.log(err);
        }

    }

    async function loadTamanhoContainer()
    {
        let tamanho = document.getElementById("tamanhoBox");
        let str = "";
        str = `<div class="comboBox"><label class="label-bold" for="tamanho">Tamanho:</label>
        <select id="tamanho">`;
        try{
            const response = await api.get('/tamanho');
            str += '<option value="0" selected disabled>Selecione o tamanho</option>';
            //console.log(response.data);
            for(let i=0; i<response.data.length; i++)
            {
                str += `<option value="${response.data[i].cod}">${response.data[i].nome}</option>`;
            }
            str += "</select><br/></div>";
            tamanho.innerHTML = str ;
        }catch(err){
            console.log(err);
        }

    }

    async function loadUniMedidaContainer()
    {
        let uniMedida = document.getElementById("unidadeMedidaBox");
        let str = "";
        str = `<div class="comboBox"><label class="label-bold" for="uniMedida">Unidade de medida:</label>
        <select id="uniMedida">`;
        try{
            const response = await api.get('/unidade');
            str += '<option value="0" selected disabled>Selecione o tamanho</option>';
            //console.log(response.data);
            for(let i=0; i<response.data.length; i++)
            {
                str += `<option value="${response.data[i].cod}">${response.data[i].nome}</option>`;
            }
            str += "</select><br/></div>";
            uniMedida.innerHTML = str ;
        }catch(err){
            console.log(err);
        }

    }
    
    function checkTipoDoacao()
    {
        var sel = document.getElementById("tipoDoacao");
        var tipo= sel.options[sel.selectedIndex].text;

        //let tipo = document.getElementById("tipoDoacao").value;
        console.log(tipo);
        let uniMedida = document.getElementById("unidadeMedidaBox");
        let tamanho = document.getElementById("tamanhoBox");
        let genero = document.getElementById("generoBox");
        let quantidade = document.getElementById("quantidadeBox");
        
        if(tipo == "Brinquedo")
        {
            uniMedida.innerHTML = "";
            tamanho.innerHTML = "";

            loadQuantidadeContainer();
            
            loadGeneroContainer();
        }
        else
        if(tipo == "Roupas")
        {
            uniMedida.innerHTML = "";

            loadQuantidadeContainer();
                    
            loadTamanhoContainer();
            
            loadGeneroContainer();
        }
        else
        if(tipo == "Alimento")
        {
            tamanho.innerHTML = "";
            genero.innerHTML = "";
            //quantidade.innerHTML = "";

            loadQuantidadeContainer();

            loadUniMedidaContainer();
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
        <div onLoad={init}>
            <Header/>

            <div class="cadastro" >
                <form class="campos-cadastro" onSubmit={handleSubmit}>
                    <h1>Agendar doação</h1>
                    <div id="nomeItemBox" class="inputBox">
                        <label class="label-bold" for="nomeItem">Nome do item:</label>
                        <input type="text" id="nomeItem" name="nomeItem" placeholder="Informe um nome para a doação"/>
                    </div>
                    <br/>

                    
                    <div id="tipoDoacaoBox" class="comboBox">
                        <label class="label-bold" for="tipoDoacao">Tipo da doação:</label>
                        <select id="tipoDoacao" onLoad={loadTipoDoacaoBox} /*onChange={checkTipoDoacao}*/>
                            {/*<option value="">Selecione o tipo de doação</option>
                            <option value="Brinquedo">Brinquedo</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Alimento">Alimento</option>*/}
                        </select>
                    </div>
                    
                    <div id="quantidadeBox" class="inputBox">
                        <label class="label-bold" for="qtde">Quantidade:</label>
                        <input type="text" id="qtde" name="qtde"/>
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
                    

                    <div id="campanhaDoacaoBox" class="comboBox">
                        <label class="label-bold" for="campanhaDoacao">Campanha de doação:</label>
                        <select  id="campanhaDoacao">
                            {/*<option value="">Selecione uma campanha de doação</option>
                            <option value="Brinquedo">St. jordan, 345 - New York</option>
                            <option value="Roupas">Passion avenue - 789 - PR</option>*/}
                        </select>
                    </div>
                    <br/>

                    <div id="localDoacaoBox" class="comboBox">
                        <label class="label-bold" for="localDoacao">Local de doação:</label>
                        <select  id="localDoacao">
                            {/*<option value="">Selecione um local de doação</option>
                            <option value="Brinquedo">St. jordan, 345 - New York</option>
                            <option value="Roupas">Passion avenue - 789 - PR</option>*/}
                        </select>
                    </div>
                    <br/>

                    <div id="dtDoacaobBox" class="inputBox">
                        <label class="label-bold" for="dtDoacao">Data da doação:</label>
                        <input type="date" name="dtDoacao" id="dtDoacao" />
                    </div>
                    <br/>

                    <button class="btConfirmar" onClick={handler}>Confirmar</button>
                </form>
            </div>

            <Footer/>
        </div>
    );
}