import React, { Component } from 'react';
import logoMenu from '../images/logo.png';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
class NavBar extends Component{
    render(){
        return(
            <div className="container-fluid color-menu">
               <nav class="navbar navbar-expand-lg navbar-light color-menu">
  <Link className="navbar-brand" to="/">
  <img src={logoMenu} alt="Logo" className="LogoLaboro"/>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link className="nav-item nav-link" to="/Quienes_Somos">¿Quiénes Somos?</Link>
      <Link className="nav-item nav-link" to="/Servicios">Servicios</Link>
    </div>
  </div>
</nav>
    </div>
        );
    }
}

export default NavBar;