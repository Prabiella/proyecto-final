import React, { Component } from 'react';
import '../css/Slide.css'

    class Slide extends Component{
        render(){
           return(
            <div>
                <div className="main-img">
                    <div className="MainTitle">
                        <h1 className="col-md-6 title">Especialistas en derecho laboral</h1>
                        <p className="col-md-5 oct-slider-text">Somos abogados laboralistas, con más de 10 años de experiencia.</p>
                    </div>
                </div>
                    <div className="mensaje-back">
                    <div align="center">
                        <h1 className="Calcu">CALCULADORA DE FINIQUITOS</h1>
                        <p className="oct-clientes">Ingresa los datos solcitados para poder calcular el finiquito correspondiente.</p>
                    </div>
                </div>
            </div>

           ); 
        }
    }
export default Slide;
