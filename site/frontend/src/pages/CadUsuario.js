import React from 'react';
import api from '../service/api'
import '../css/Formularios.css';
import Header from '../components/Header';
import swal from 'sweetalert';
import moment from 'moment';

const CadUsuario = (props) => {
    const Usuario = props.location.state;
    const [nome, setNome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [dtNasc, setDtNasc] = React.useState(new Date());
    const [endereco, setEndereco] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [tipoUsuario, setTipoUsuario] = React.useState(0);
    const [estaAtualizando, setEstaAtualizando] = React.useState(false);

    React.useEffect(()=>{
        if(!estaAtualizando)
            atualiza() 
        console.log(Usuario)    
    });

    function validaTexto(texto, qtde) {
        if (texto.length >= qtde) {
            return true;
        }
        return false;
    }

    function atualiza(){
        if(Usuario === undefined){
            setEstaAtualizando(false)
        }
        else{
            setEstaAtualizando(true)
            setNome(Usuario.nome)
            setCpf(Usuario.cpf)
            setSenha(Usuario.senha)
            setDtNasc(Usuario.dataNasc)
            setEndereco(Usuario.endereco)
            setEmail(Usuario.email)
            setTelefone(Usuario.telefone)
            setTipoUsuario(Usuario.tipo)
        }
    }
    

    function validaDtNasc() {
        // ***OBS --> VER ESTÁ DANDO ERRO
        const dtAtual =  moment();

        if(dtNasc !== '') {
            let dtUsu = moment(`${dtNasc.substr(0,4)}/${dtNasc.substr(5,2)}/${dtNasc.substr(8,2)}`);
            if(dtAtual.isAfter(dtUsu, 'day')) {
                return true;
            } else {
                return false;
            }
        }  else {
            return false;
        }      
    }

    function validaCpfCnpj(val) {
        if (val.length == 14) { // Entra se for CPF
            var cpf = val.trim();
         
            cpf = cpf.replace(/\./g, '');
            cpf = cpf.replace('-', '');
            cpf = cpf.split('');
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;   
                }
            } 
            
            if (aux == false) {
                return false; 
            } 
            
            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p; 
            } 
            
            v1 = ((v1 * 10) % 11);
            
            if (v1 == 10) {
                v1 = 0; 
            }
            
            if (v1 != cpf[9]) {
                return false; 
            } 
            
            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p; 
            } 
            
            v2 = ((v2 * 10) % 11);
            
            if (v2 == 10) {
                v2 = 0; 
            }
            
            if (v2 != cpf[10]) {
                return false; 
            } else {   
                return true; 
            }
        } else if (val.length == 18) { // Entra se for CNPJ
            var cnpj = val.trim();
            
            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', ''); 
            cnpj = cnpj.split(''); 
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cnpj.length > i; i++) { 
                if (cnpj[i - 1] != cnpj[i]) {  
                    aux = true;   
                } 
            } 
            
            if (aux == false) {  
                return false; 
            }
            
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {  
                    v1 += cnpj[i] * p1;  
                } else {  
                    v1 += cnpj[i] * p2;  
                } 
            } 
            
            v1 = (v1 % 11);
            
            if (v1 < 2) { 
                v1 = 0; 
            } else { 
                v1 = (11 - v1); 
            } 
            
            if (v1 != cnpj[12]) {  
                return false; 
            } 
            
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                if (p1 >= 2) {  
                    v2 += cnpj[i] * p1;  
                } else {   
                    v2 += cnpj[i] * p2; 
                } 
            }
            
            v2 = (v2 % 11); 
            
            if (v2 < 2) {  
                v2 = 0;
            } else { 
                v2 = (11 - v2); 
            } 
            
            if (v2 != cnpj[13]) {   
                return false; 
            } else {  
                return true; 
            }
        } else {
            return false;
        }
    }

    function mascaraCPF() {
        // *OBS - ARRUMAR
        var cpf = document.getElementById("cpf")
        console.log(cpf)
        if (cpf.value.length == 3 || cpf.value.length == 7){
            cpf.value += "."
        } else if (cpf.value.length == 11){
            cpf.value += "-"
        }
    }

    function mascaraTelefone(){
        var phone = document.getElementById("telefone")
        if (phone.value.length == 2){
            phone.value = "(" + phone.value + ") "
        }
        if (phone.value.length == 10) {
            phone.value += "-"
        }
    }

    function validaTipoUsu() {
        if (tipoUsuario > 0 && tipoUsuario <= 3) {
            return true;
        }
        return false;
    }

    function handler() {
        setNome(document.querySelector('#nome').value);
        setCpf(document.querySelector('#cpf').value);
        setSenha(document.querySelector('#senha').value);
        setDtNasc(document.querySelector('#dtNasc').value);
        setEndereco(document.querySelector('#endereco').value);
        setEmail(document.querySelector('#email').value);
        setTelefone(document.querySelector('#telefone').value);
        setTipoUsuario(parseInt(document.querySelector('#tipoUsuario').value));
    }


    function handleSubmit(e) {
        e.preventDefault();

        console.log(`
        Nome - ${nome} \n
        CPF - ${cpf} \n
        Senha - ${senha} \n
        DtNasc - ${dtNasc} \n
        Endereco - ${endereco} \n
        Email - ${email}\n
        Telefone - ${telefone} \n
        Tipo Usu - ${tipoUsuario} \n\n`);

        const validaNome = validaTexto(nome, 5);
        const validaCpf = validaCpfCnpj(cpf);
        const validaSenha = validaTexto(senha, 6);
        const validaEndereco = validaTexto(endereco, 5);
        const validaData = validaDtNasc();
        if (validaNome !== true) {
            swal("Erro!", "Preencher nome com no mínimo 5 caracter", "error");
            document.querySelector("#nome").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaCpf !== true) {
            swal("Erro!", "CPF Inválido", "error");
            document.querySelector("#cpf").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaSenha !== true) {
            swal("Erro!", "Senha deve conter no mínimo 6 caracter", "error");
            document.querySelector("#senha").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaData !== true) {
            swal("Erro!", "Data inválida", "error");
            document.querySelector("#dtNasc").focus();
            // --> não funciona .focus() tem que arrumar
        } else if (validaEndereco !== true) {
            swal("Erro!", "Edereço deve conter no mínimo 10 caracter", "error");
            document.querySelector("#endereco").focus();
        } else if (validaTipoUsu() !== true) {
            swal("Erro!", "Selecione um tipo de usuário", "error");
            document.querySelector("#tipoUsuario").focus();
        } else {
            

            if(!estaAtualizando){
                const usuario = {
                    nome: nome,
                    senha: senha,
                    cpf: cpf,
                    dataNascimento: dtNasc,
                    endereco: endereco,
                    telefone: telefone,
                    email: email,
                    tipo: tipoUsuario,
                };
                // Não sei porque com await está dando erro, ai tirei funcionou
                api.post('/usuario', usuario);     
                swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                    window.location = '/';
                });
            } else {
                const usuario = {
                    id: Usuario.id,
                    nome: nome,
                    senha: senha,
                    cpf: cpf,
                    dataNascimento: dtNasc,
                    endereco: endereco,
                    telefone: telefone,
                    email: email,
                    tipo: tipoUsuario,
                };

                api.put('/usuario', usuario); 
                
                swal("Finalizado!", "Atualizado efetuada com sucesso.", "success").then(function() {
                    window.location = '/';
                });   

            }

            
                   

            setNome('');
            setCpf('');
            setSenha('');
            setDtNasc('');
            setEndereco('');
            setEmail('');
            setTelefone('');
            setTipoUsuario(0);

            
            
            /*
                Não deixar finalizar antes tenho que consultar se o CPF já não está cadastrado,
                se não estiver, ai sim que irei poder realizar o cadastro.
            */
            
        }

    }


    return (
        <div>
            <Header/>

            <div class="cadastro">
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <h1>Cadastrar Usuário</h1>

                    <div class="box-nome">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" 
                        defaultValue={nome}/>
                    </div>

                    <div class="box-cpf">
                        <label for="cpf">CPF</label>

                        {/* <input type="text" id="campo_cpf" placeholder="Apenas Números"
                        onblur={validarCPF()}/> */}

                        <input type="text" name="cpf" id="cpf" placeholder="Apenas Números" 
                         defaultValue={cpf} maxLength={14} onChange={mascaraCPF}/>

                    </div>

                    <div class="box-senha">
                        <label for="nome">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Informe sua senha" 
                        defaultValue={senha}/>
                    </div>

                    <div class="box-dtNasc">
                        <label for="dtNasc">Data Nascimento</label>
                        <input type="date" name="dtNasc" id="dtNasc" defaultValue={dtNasc} />
                    </div>

                    <div class="box-endereco">
                        <label for="endereco">Endereço Completo</label>
                        <input type="text" name="endereco" id="endereco" placeholder="Informe o endereço completo, como nome da Cidade e Estado" 
                        defaultValue={endereco}/>
                    </div>

                    <div class="box-email">
                        <label for="email">Email <p>(opcional)</p></label>
                        <input type="email" name="email" id="email" placeholder="Digite o seu email"
                        defaultValue={email} />
                    </div>

                    <div class="box-telefone">
                        <label for="telefone">Telefone <p>(opcional)</p></label>
                        <input type="text" name="telefone" id="telefone" placeholder="Digite o numero do seu telefone" 
                        defaultValue={telefone} onChange={mascaraTelefone}/>
                    </div>

                    <div class="box-tipoUsuario">
                        <label for="tipoUsuario">Qual seu tipo de inscrição?</label>
                        <select name="tipoUsuario" id="tipoUsuario" defaultValue={tipoUsuario}>
                            <option class="test" value='0' selected disabled>Selecione</option>
                            <option value="1">Colaborador</option>
                            <option value="2">Doador</option>
                            <option value="3">Responsável</option>
                        </select>
                    </div>

                    <button class="bt-cadUsuario" type="submit" onClick={handler}>Confirmar</button>
                </form>
            </div>
        </div>
    );
}

export default CadUsuario;