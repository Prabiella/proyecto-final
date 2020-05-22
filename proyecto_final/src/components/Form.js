import React, { Component } from 'react';
import "../css/Form.css"
/*paso1 se importan los componentes*/
import Titleform from './form/Titleform';
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

    onCotiza(e){
      console.log(this.refs.nombre.oPtValor());

    }

    onSubmit(e){
      e.preventDefault();
      let nombre = this.refs.nombre.oPtValor();
      let correo = this.refs.correo.oPtValor();
      let fechingreso = this.refs.fechingreso.oPtValor();
      let ultdialab = this.refs.ultdialab.oPtValor();
      let salmen = this.refs.salmen.oPtValor();
      let diastrab = this.refs.diastrab.oPtValor();

      
      let saldia =   salmen / 30;
      let diastrab1 = diastrab * 0.0410;
      let aginaldo = saldia * diastrab1;
      let vacaciones = [(0.01 * diastrab) * saldia] * 0.25;
      let diastot = saldia * diastrab;
      let finiquito = diastot + vacaciones + aginaldo;
      
      
      this.setState({userNombre:"Hola " + nombre});

      this.setState({MensajeText:"El total de tu finiquito será de: "});
      this.setState({Mensaje:finiquito});
      
      this.setState({userMailText:"Te hemos enviado un correo a "});
      this.setState({userMail:correo});
      
      this.setState({AguinaldoText:"El monto de tu aginaldo es:"});
      this.setState({Aguinaldo:aginaldo});
      
      this.setState({VacacionesText:"El monto de tu prima vacacional es: "});
      this.setState({Vacaciones:vacaciones});
      
      this.setState({DiasTrabText:"Los días que has trabajado son:"});
      this.setState({DiasTrab:diastot});
     


      
     

    }
    render(){
        return(
            <div>

                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <Titleform/>
                            <form onSubmit={this.onSubmit} >
                            <Inputs
                            EtiInput="text"
                            EtiLabel="Nombre"
                            isRequired = {true}
                            ref="nombre"
                            />

                            <Inputs
                            EtiInput="text"
                            EtiLabel="Correo"
                            isRequired = {true}
                            ref="correo"
                            />

                            
                            <Inputs
                            EtiInput="number"
                            EtiLabel="Salario Mensual"
                            isRequired = {true}
                            ref="salmen"
                            />

                            <Inputs
                            EtiInput="number"
                            EtiLabel="Dias Trabajados"
                            isRequired = {true}
                            ref="diastrab"
                            />

                            <Inputs
                            EtiInput="date"
                            EtiLabel="Fecha de ingreso"
                            isRequired = {true}
                            ref="fechingreso"
                            />

                            <Inputs
                            EtiInput="date"
                            EtiLabel="Ultimo día laborado"
                            isRequired = {true}
                            ref="ultdialab"
                            />


                            <br/>
                            <button>COTIZAR FINIQUITO</button>
                            </form>
                          </div>
                          <div className="col-md-4">
                          <div>
                          <br/><br/><br/><br/>
                            <table>
                            <h1 className="titleResul"><center>{this.state.userNombre}</center></h1>
                            <tbody>
                                <tr>
                                  <td>
                                    <br/>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <p className="Text">
                                      <center>
                                      {this.state.DiasTrabText}
                                      </center>
                                      </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="Resul">
                                      <center>
                                      {this.state.DiasTrab}
                                      </center>
                                      </p>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <p className="Text">
                                      <center>
                                      {this.state.AguinaldoText}
                                      </center>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="Resul">
                                      <center>
                                      {this.state.Aguinaldo}
                                      </center>
                                    </p>
                                  </td>
                                </tr>


                                <tr>
                                  <td>
                                    <p className="Text">
                                      <center>
                                      {this.state.VacacionesText}
                                      </center>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="Resul">
                                      <center>
                                      {this.state.Vacaciones}
                                      </center>
                                    </p>
                                  </td>
                                </tr>




                                <tr>
                                  <td>
                                    <p className="Text">
                                      <center>
                                      {this.state.MensajeText}
                                      </center>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="Resul">
                                      <center>
                                      {this.state.Mensaje}
                                      </center>
                                    </p>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <p className="Text">
                                      <center>
                                      {this.state.userMailText}
                                      </center>
                                      </p>
                                    </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="Resul">
                                      <center>
                                      {this.state.userMail}
                                      </center>
                                      </p>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                          </div>
                        </div>
                        
                      </div>
            </div>
        );
    }
}
export default Form;