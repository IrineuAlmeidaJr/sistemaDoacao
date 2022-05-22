import React from "react"
import { Redirect } from "react-router";

const Login = ()=>{
    alert("Login provisório criado com o usuário 24")
    localStorage.setItem("usuario",24)
    return(
    <Redirect to="/"/>
    )
}

export default Login;