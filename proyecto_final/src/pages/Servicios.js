import React, { Component } from 'react';
import Slide3 from '../components/Slide3';
import Footer from '../components/Footer';
import "../css/main.css"
class Servicios extends Component{
        render(){
            return(
                <div className="back_general">
                    <div className="row">
                        <div className="col-md-12"><Slide3/></div>
                    </div>
                    <div className="row cuerpo">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <ul>
                        <li><h2>Consultas</h2></li>  
                        <li>Presencial En Nuestras Oficinas​</li>
                        <li>Video Conferencia</li>
                        <li>Vía Telefónica</li>
                        <li>Correo Electrónico​</li>  
                        </ul>  

                        <ul>
                        <li><h2>Honorarios -Financiamiento</h2></li>  
                        <li>Hasta 12 Meses Para Pagar (Financiamiento Directo Con Abogacía)​</li>
                        <li>3 0 6 Meses Con Tarjetas Bancarias</li>
                        <li>Plan De Pago Individualizado, Justo</li>
                        <li>Honorarios Accesibles A Todas Las Capacidades Económicas​</li>  
                        </ul>

                        <ul>
                        <li><h2>Servicios</h2></li>  
                        <li>Asesoría Línea Directa​</li>
                        <li>365 Días 24/7</li>
                        <li>Acceso Personal A Expediente Electrónico</li>
                        <li>Servicio De Mensajería (Documentación Domicilio-Oficina)​</li>
                        <li>Servicio De Traslados (Clientes)​</li>  
                        </ul>  
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                <div className="col-md-12"><Footer/></div>
                </div>
                </div>
         



            )
        }
}
export default Servicios;