import React, { Component } from 'react';
import "../css/Form.css"
import{BrowserRouter as Router, Redirect }from 'react-router-dom';
/*paso1 se importan los componentes*/
import Inputs from './form/Inputs';

//this.refs.nombreComponente.nombreMetodo//
class Form extends Component{
    constructor(){
      super();
      this.state ={
        Mensaje: ''
       
      }
      this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e){
      e.preventDefault();
      let correo = this.refs.correo.oPtValor();
      let password = this.refs.password.oPtValor();

      if (correo == 'admin' && password == 123456) {
        window.location = "/Admin"
       
       
          
      } else {
        this.setState({Mensaje:"Los datos son incorrectos"});
          
      }


    }
    render(){
        return(
            <Router>
            <div className="LoginForm" >
                    <div className="row">
                        <div className="col-md-12" >
                        <h3 className="usuLog">
                            <center>
                             Ingresa con tu usuario y contraseña
                             </center>
                          </h3>
                        </div>

                    </div>
                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                         
                            <form onSubmit={this.onSubmit} >
                         
                            <Inputs
                            EtiInput="text"
                            EtiLabel="Usuario"
                            isRequired = {true}
                            ref="correo"
                            />

                            
                            <Inputs
                            EtiInput="text"
                            EtiLabel="Contraseña"
                            isRequired = {true}
                            ref="password"
                            />

                            <br/>
                            <button>ENTRAR</button>
                            </form>
                            </div>
                        <div className="col-md-4"> </div>
                        </div>

                        <div className="row">
                        <div className="col-md-12">
                          <div>
                            <br/> 
                            <p><center>{this.state.Mensaje}</center></p>
                           
                          </div>
                       </div>
                        
                       
                        </div>



               

            </div>
            </Router>
        );
    }
}
export default Form;