import React from "react"
import { Redirect } from "react-router";

const Login = ()=>{
    alert("Login provisório criado com o usuário 29")
    localStorage.setItem("usuario",29)
    return(
    <Redirect to="/"/>
    )
}

export default Login;