import React, { Component } from 'react';
import '../../css/Titleform.css'
class TitleForm extends Component{
        render(){
           return(
                <div className="FormGeneral">
                    <p className='oct-datos'>DATOS DEL EMPLEADO</p>
                    <p className='oct-sub'>Ingresa los datos solcitados para poder calcular el finiquito correspondiente.</p>
                    </div>
           );     

        }
}

export default TitleForm;
