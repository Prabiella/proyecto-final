import React, { Component } from 'react';
import "../css/Map.css"
class Map extends Component{
        render(){
            return(
                <div>
                    <div className="col-md-12">
                    <br/><br/><br/>
                    <p className="oct-texto-m">OFICINAS | MÉXICO</p>
                    <p className="oct-texto-dir">Calzada de Tlalpan 1924. Churubusco Country Club CP. 04210 Delegación Coyoacán Ciudad de México Teléfono. 5628 5600</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15427.57076921454!2d-99.15337920389653!3d19.34967485825916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x318a40ed49e2ee61!2sCentro+De+Atenci%C3%B3n+Dish!5e0!3m2!1ses-419!2smx!4v1565275469409!5m2!1ses-419!2smx" width="99%" height="330" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            );
        }
}

export default Map;