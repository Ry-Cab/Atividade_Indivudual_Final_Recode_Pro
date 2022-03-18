import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Default/Header";

import ReadDestinos from "./components/Destinos/ReadDestinos";
import CreateDestino from "./components/Destinos/CreateDestino";
import UpdateDestino from "./components/Destinos/UpdateDestino";
import DetailsDestino from "./components/Destinos/DetailsDestino";

import ReadClientes from "./components/Clientes/ReadClientes";
import CreateCliente from "./components/Clientes/CreateClientes";
import UpdateCliente from "./components/Clientes/UpdateClientes";
import DetailsCliente from "./components/Clientes/DetailsClientes";

import ReadPassagem from "./components/Passagem/ReadPassagem";
import CreatePassagem from "./components/Passagem/CreatePassagem";
import UpdatePassagem from "./components/Passagem/UpdatePassagem";
import DetailsPassagem from "./components/Passagem/DetailsPassagem";

function App() {
  return (
    <>
      
        <Router>
        <Header></Header>

          <Switch>     
  
            {/*Destinos*/}
              <Route path = "/" exact component = {ReadDestinos}></Route>
              <Route path = "/destinos" component = {ReadDestinos}></Route>
              <Route path = "/create-destino"  component = {CreateDestino}></Route>
              <Route path = "/delete-destino"  component = {ReadDestinos}></Route>
              <Route path = "/update-destino/:id" component = {UpdateDestino}></Route>
              <Route path = "/details-destino/:id" component = {DetailsDestino}></Route>
            {/* Clientes*/}
              <Route path = "/clientes" component = {ReadClientes}></Route>
              <Route path = "/create-cliente" exact  component = {CreateCliente}></Route>
              <Route path = "/delete-cliente"  component = {ReadClientes}></Route>
              <Route path = "/update-cliente/:id" component = {UpdateCliente}></Route>
              <Route path = "/details-cliente/:id" component = {DetailsCliente}></Route>

            {/*Passagem*/}
              <Route path = "/passagens" component = {ReadPassagem}></Route>
              <Route path = "/create-passagem" exact  component = {CreatePassagem}></Route>
              <Route path = "/delete-passagem"  component = {ReadPassagem}></Route>
              <Route path = "/update-passagem/:id" component = {UpdatePassagem}></Route>
              <Route path = "/details-passagem/:id" component = {DetailsPassagem}></Route>
       
          </Switch>
        </Router>
      
  
    </>
  );
}

export default App;
