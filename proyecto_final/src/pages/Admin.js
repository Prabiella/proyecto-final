import React, { Component } from 'react';
import Footer from '../components/Footer'
import "../css/main.css"

class Admin extends Component{
    render(){
        return( 
            <div className="back_general">
                <div className="row">
                    <div className="col-md-12">
                        <center>
                        <h3>Usuarios Registrados</h3>
                        </center>
                     
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <table class="tg">
                        <tr >
                            <th class="tg-0pky">Nombre</th>
                            <th class="tg-0pky">Correo</th>
                            <th class="tg-0pky">Antiguedad</th>
                            <th class="tg-0pky">Finiquito</th>
                            
                        </tr>
                        <tr>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            
                        </tr>
                        <tr>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            
                        </tr>
                        <tr>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            <td class="tg-0pky">NaN</td>
                            
                        </tr>
                        </table>
                     
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

export default Admin;