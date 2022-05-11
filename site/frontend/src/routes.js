import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListaUsuario from "./pages/ListaUsuario";
import CadUsuario from "./pages/CadUsuario";
import CampanhaDoacao from "./pages/CadCampanhaDoacao";
//import FormCadDoacao from "./pages/CadDoacao"; SERÁ USADO DEPOIS - NÃO APAGAR
import FormCadTipoDoacao from "./pages/CadTipoDoacao";
import ListaTipoDoacao from "./pages/ListaTipoDoacao";
import FormCadTamanho from "./pages/CadTamanho";
import ListaTamanho from "./pages/ListaTamanho";
import FormCadLocalDoacao from "./pages/CadLocalDoacao";
import FormCadCampanhaDoacao from "./pages/CadCampanhaDoacao";
import FormCadBeneficiario from "./pages/CadBeneficiarios";
import ListaBeneficiarios from "./pages/ListaBeneficiarios";



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
           <Route component={FormCadTamanho} path="/cadTamanho"/>
           <Route component={ListaTamanho} path='/listaTamanho'/>
            <Route component={FormCadLocalDoacao} path="/cadLocalDoacao"/>
            <Route component={FormCadCampanhaDoacao} path="/cadCampanha"/>
            <Route component={FormCadBeneficiario} path="/cadBeneficiario"/>
            <Route component={ListaBeneficiarios} path="/listaBeneficiarios"/>

       </BrowserRouter>
   )
}

export default Routes;