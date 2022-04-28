import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListaUsuario from "./pages/ListaUsuario";
import CadUsuario from "./pages/CadUsuario";
//import FormCadDoacao from "./pages/CadDoacao"; SERÁ USADO DEPOIS - NÃO APAGAR
import FormCadTipoDoacao from "./pages/CadTipoDoacao";
import ListaTipoDoacao from "./pages/ListaTipoDoacao";
import FormCadTamanho from "./pages/CadTamanho";
import ListaTamanho from "./pages/ListaTamanho";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { CadUsuario }  path="/cadUsuario" />
           <Route component = { ListaUsuario }  path="/listaUsuario" />
           {/*<Route component = { FormCadDoacao }  path="/cadDoacao" /> ------ SERÁ USADO DEPOIS - NÃO APAGAR*/}
           <Route component = { FormCadTipoDoacao }  path="/cadTipoDoacao" />
           <Route component = {ListaTipoDoacao} path="/listaTipoDoacao" />
           <Route component={FormCadTamanho} path="/cadTamanho"/>
           <Route component={ListaTamanho} path='/listaTamanho'/>
       </BrowserRouter>
   )
}

export default Routes;