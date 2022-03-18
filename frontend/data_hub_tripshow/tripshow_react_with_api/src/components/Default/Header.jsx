import React, { Component } from 'react';
import { Router, Link, Switch } from 'react-router-dom';
import "../../layout/css/header.css";
import Logo from "../../layout/img/logo/logo-200.png"

class Header extends Component {
    render() {
        return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style={{padding: "3em"}}>
  
  <img src={Logo} alt="" />
  <a class="navbar-brand">Data hub</a>

  <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav">
          <li class="nav-item">
          <Link class="nav-link active" to={"/destinos"} >Destinos</Link>
          </li>
          
          <li class="nav-item">

          <Link class="nav-link active" to={"/clientes"} >Clientes</Link>
          
          </li>
          <li class="nav-item">

          <Link class="nav-link active" to={"/passagens"} >Passagens</Link>
          
          </li>
       
    </ul>
  </div>
</nav>

        );
    }
}

export default Header;