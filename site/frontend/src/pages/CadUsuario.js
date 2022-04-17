import React from 'react';
import './CadUsuario.css';
import Header from '../components/Header';
import swal from 'sweetalert';

import { createClient } from '@supabase/supabase-js';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeW1odnB4bG9ndnFpbW9reXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MzE1ODUsImV4cCI6MTk2NTIwNzU4NX0.b32YpSZum0hX5rGX6GM_JsNFl8rKn0dirVzvDDTE_qo'
const SUPABASE_URL = 'https://tjymhvpxlogvqimokytv.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)



const CadUsuario = () => {

    // function validarCPF() {
    //     let value_cpf = document.querySelector('#campo_cpf');

    //     value_cpf.addEventListener("keydown", function (e) {
    //         if (e.key > "a" && e.key < "z") {
    //             e.preventDefault();
    //         }
    //     });
    //     value_cpf.addEventListener("blur", function (e) {
    //         //Remove tudo o que não é dígito
    //         let validar_cpf = this.value.replace(/\D/g, "");

    //         //verificação da quantidade números
    //         if (validar_cpf.length === 11) {

    //             // verificação de CPF valido
    //             let Soma;
    //             let Resto;

    //             Soma = 0;
    //             for (let i = 1; i <= 9; i++) 
    //                 Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (11 - i);
    //             Resto = (Soma * 10) % 11;

    //             if ((Resto === 10) || (Resto === 11)) 
    //                 Resto = 0;
    //             if (Resto !== parseInt(validar_cpf.substring(9, 10))) 
    //                 return alert("CPF Inválido!");;

    //             Soma = 0;
    //             for (let i = 1; i <= 10; i++) 
    //                 Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (12 - i);
    //             Resto = (Soma * 10) % 11;

    //             if ((Resto === 10) || (Resto === 11)) 
    //                 Resto = 0;
    //             if (Resto !== parseInt(validar_cpf.substring(10, 11))) 
    //                 return alert("CPF Inválido!");;

    //             //formatação final
    //             let cpf_final;
    //             cpf_final = validar_cpf.replace(/(\d{3})(\d)/, "$1.$2");
    //             cpf_final = cpf_final.replace(/(\d{3})(\d)/, "$1.$2");
    //             cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    //             document.getElementById('campo_cpf').value = cpf_final;

    //         } else {
    //             alert("CPF Inválido! É esperado 11 dígitos numéricos.")
    //         }

    //     })
    // }

    const [nome, setNome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [dtNasc, setDtNasc] = React.useState(new Date());
    const [endereco, setEndereco] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [tipoUsuario, setTipoUsuario] = React.useState(0);

    function validaTexto(texto, qtde) {
        if (texto.length >= qtde) {
            return true;
        }
        return false;
    }

    function validaDtNasc() {
        // ***OBS --> VER ESTÁ DANDO ERRO
        // const dtAtual = new Date().toDateString();
        // let dtUsu = '';

        // if(dtNasc !== '') {
        //     dtUsu = new Date(`${dtNasc.substr(0,4)}/${dtNasc.substr(5,2)}/${dtNasc.substr(8,2)}`).toDateString();
        // }       

        // // Quando dava new e não tinha data dava -> invalid date
        // // Desta forma fez uma condição antes de dar new
        // if(dtUsu.length > 0 && dtUsu <= dtAtual) {
        //     return true;
        // } else {
        //     return false;
        // }

        if (dtNasc === '') {
            return false;
        }
        return true;
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
        const validaCpf = validaTexto(cpf, 5);
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
            const usuario = {
                // ID gerando no banco de dados (autocomplete/sequence)
                cpf_usu: cpf,
                senha_usu: senha,
                tipoUsuario_usu: tipoUsuario,
                nome_usu: nome,
                dataNasc_usu: dtNasc,
                endereco_usu: endereco,
                telefone_usu: telefone,
                email_usu: email
            }

            // Colocar essa parte no banco e fazer um try...cath,
            // essa função o correto é fazer assincrona
            supabaseClient
            .from('usuario')
            .insert([usuario])
            .then(({ data }) => {
                // setListaMensagens([
                //     data[0],
                //     ...listaMensagens // Espalhamento
                // ])
                // console.log('Criando mensagem', data)
            })

                  

            setNome('');
            setCpf('');
            setSenha('');
            setDtNasc('');
            setEndereco('');
            setEmail('');
            setTelefone('');
            setTipoUsuario(0);

            swal("Finalizado!", "Cadastrado efetuado com sucesso.", "success").then(function() {
                window.location = '/';
            });
            
            
        }

    }


    return (
        <div>
            <Header />

            <div class="cadastro">
                <h2>Cadastrar Usuário</h2>
                <form action="POST" class="campos-cadastro" onSubmit={handleSubmit}>

                    <div class="box-nome">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" />
                    </div>

                    <div class="box-cpf">
                        <label for="cpf">CPF</label>

                        {/* <input type="text" id="campo_cpf" placeholder="Apenas Números"
                        onblur={validarCPF()}/> */}

                        <input type="text" name="cpf" id="cpf" placeholder="Apenas Números" />

                    </div>

                    <div class="box-senha">
                        <label for="nome">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Informe sua senha" />
                    </div>

                    <div class="box-dtNasc">
                        <label for="dtNasc">Data Nascimento</label>
                        <input type="date" name="dtNasc" id="dtNasc" />
                    </div>

                    <div class="box-endereco">
                        <label for="endereco">Endereço Completo</label>
                        <input type="text" name="endereco" id="endereco" placeholder="Informe o endereço completo, como nome da Cidade e Estado" />
                    </div>

                    <div class="box-email">
                        <label for="email">Email <p>(opcional)</p></label>
                        <input type="email" name="email" id="email" placeholder="Digite o seu email" />
                    </div>

                    <div class="box-telefone">
                        <label for="telefone">Telefone <p>(opcional)</p></label>
                        <input type="text" name="telefone" id="telefone" placeholder="Digite o numero do seu telefone" />
                    </div>

                    <div class="box-tipoUsuario">
                        <label for="tipoUsuario">Qual seu tipo de inscrição?</label>
                        <select name="tipoUsuario" id="tipoUsuario">
                            <option class="test" value='0' selected disabled>Selecione</option>
                            <option value="1">Colaborador</option>
                            <option value="2">Doador</option>
                            <option value="3">Responsável</option>
                        </select>
                    </div>

                    <button type="submit" onClick={handler}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default CadUsuario;