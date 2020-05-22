import React, { Component } from 'react';

class Boton extends Component{
   btnPresionado(event){
       alert ("test")

   }

    render(){
        return(
              <div>
                  <button onClick={this.btnPresionado}>
                      ENVIAR FORMULARIO
                  </button>


              </div>  


        );




    }



}

export default Boton;