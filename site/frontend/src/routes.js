import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListaUsuario from "./pages/ListaUsuario";
import CadUsuario from "./pages/CadUsuario";
import CampanhaDoacao from "./pages/CadCampanhaDoacao";
//import FormCadDoacao from "./pages/CadDoacao"; SERÁ USADO DEPOIS - NÃO APAGAR
import FormCadTipoDoacao from "./pages/CadTipoDoacao";
import ListaTipoDoacao from "./pages/ListaTipoDoacao";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { CadUsuario }  path="/cadUsuario" />
           <Route component = { ListaUsuario }  path="/listaUsuario" />
           <Route component = { CampanhaDoacao}  path="/CadCampanhaDoacao" />
           {/*<Route component = { FormCadDoacao }  path="/cadDoacao" /> ------ SERÁ USADO DEPOIS - NÃO APAGAR*/}
           <Route component = { FormCadTipoDoacao }  path="/cadTipoDoacao" />
           <Route component = {ListaTipoDoacao} path="/listaTipoDoacao" />
       </BrowserRouter>
   )
}

export default Routes;