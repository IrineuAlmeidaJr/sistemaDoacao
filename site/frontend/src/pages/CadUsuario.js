import React from 'react';
import './CadUsuario.css'
import Header from '../components/Header'

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


    return (
        <div>
            <Header />

            <div class="cadastro">
                <h2>Cadastrar Usuário</h2>
                <form action="POST" class="campos-cadastro">
                    
                    <div class="box-nome">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" />
                    </div>

                    <div class="box-cpf">
                        <label for="cpf">CPF</label>
                       
                        {/* <input type="text" id="campo_cpf" placeholder="Apenas Números"
                        onblur={validarCPF()}/> */}

                        <input type="text" name="cpf" id="cpf" placeholder="Apenas Números"/>

                    </div>

                    <div class="box-senha">
                        <label for="nome">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Informe sua senha" />
                    </div>

                    <div class="box-idade">
                        <label for="idade">Data Nascimento</label>
                        <input type="date" name="idade" id="idade" />
                    </div>

                    <div class="box-endereco">
                        <label for="endereco">Endereço Completo</label>
                        <input type="text" name="endereco" id="endereco" placeholder="Informe o endereço completo, como nome da Cidade e Estado"/>
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
                            <option class="test" value="" selected disabled>Selecione</option>
                            <option value="colaborador">Colaborador</option>
                            <option value="doador">Doador</option>
                            <option value="responsavel">Responsável</option>
                        </select>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default CadUsuario;