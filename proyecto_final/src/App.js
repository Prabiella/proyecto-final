import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
}from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Quienes_Somos from './pages/Quienes_Somos'
import Servicios from './pages/Servicios'
import Login from './pages/Login'
import ThankPages from './pages/ThanKPages'
import Admin  from './pages/Admin'
import NavBar from './components/NavBar'

function App() {
  return (
    
    <Router>
      <div className="container-fluid">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/Quienes_Somos" component={Quienes_Somos}/>
      <Route path="/Servicios" component={Servicios}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Admin" component={Admin}/>
      <Route path="/ThankPages/:EtiLabel" component={ThankPages}/>
      </div>
    </Router>
  );
}
export default App;
