import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListaUsuario from "./pages/ListaUsuario";
import CadUsuario from "./pages/CadUsuario";
import FormCadDoacao from "./pages/CadDoacao";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { CadUsuario }  path="/cadUsuario" />
           <Route component = { ListaUsuario }  path="/listaUsuario" />
           <Route component = { FormCadDoacao }  path="/cadDoacao" />              
       </BrowserRouter>
   )
}

export default Routes;