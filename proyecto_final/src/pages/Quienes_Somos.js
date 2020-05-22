import React, { Component } from 'react';
import Slide2 from '../components/Slide2';
import Footer from '../components/Footer';
import "../css/main.css"
class Quienes_somos extends Component{
        render(){
            return(
                <div className="back_general">
                <div className="row">
                        <div className="col-md-12">
                        <Slide2/>
                        </div>
                </div>
                <div className="row cuerpo">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                    <h1>
                        LABORO
                    </h1>
                    <p>
                    Es un despacho de abogados con más de 25 años de experiencia. Nuestro objeto es brindar servicios profesionales a personas físicas y empresas. Nuestros sectores de interés: Legal, Contable-Financiero y Patrimonial 
                    </p>
                    <p>
                    En Laboro prevenimos riesgos, damos solución eficaz e inmediata a conflictos presentes y eliminamos las contingencia que puedan sobrevenir en el futuro. 
                    </p>
                    <h1>
                        <left>
                        "Prevención, Blindaje, Protección y Planeación"
                        </left>
                    </h1>

                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                        <div className="col-md-12">
                        <Footer/> 
                        </div>
                </div>
                </div>
         



            )
        }




}

export default Quienes_somos;