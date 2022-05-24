//import {Redirect} from 'react-router-dom';

export default function Logout() {
    const usu = JSON.parse(localStorage.getItem("usuInfo"));
    usu.id = -1;
    usu.cpf = "";
    usu.dataNascimento = "";
    usu.nome = "";
    usu.endereco = "";
    usu.email = "";
    usu.senha = "";
    usu.telefone = "";
    usu.tipo = "";

    localStorage.setItem("usuInfo", JSON.stringify(usu));
    window.location = "/";
}