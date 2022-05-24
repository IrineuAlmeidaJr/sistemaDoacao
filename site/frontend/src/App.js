import React from 'react';
import Routes from "./routes";
//import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
    const usu = JSON.parse(localStorage.getItem("usuInfo"));
    if(usu.id == undefined)
    {
        localStorage.setItem("usuInfo", JSON.stringify({
        "id": -1,
        "cpf": "",
        "dataNascimento": "",
        "nome": "",
        "endereco": "",
        "email": "",
        "senha": "",
        "telefone": "",
        "tipo": ""}));
    }
    
    return (
       <Routes/>
   );
}