import React, { Component } from 'react';
import Footer from '../components/Footer'
import "../css/main.css"
import PropTypes from 'prop-types';
class ThankPages extends Component{
        constructor(props){
             super(props);
             this.state ={
                EtiLabel: this.props.match.params.EtiLabel
             }  


        }

        render(){
            return(
                <div className="back_general">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{"HOLA "+ (this.state.EtiLabel)}</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                    <li>El finiquito que te corresponde es: NAN​</li>
                                    <li>Tu Aginaldo es: NAN</li>
                                    <li>Tu Prima Vacacional es: NAN </li>
                                    <li>Te hemos enviado dicha informaciòn a: NAN​</li>  
                                    </ul>  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Footer/>
                                </div>
                            </div>
                         </div>
                </div>

            );
        }
}

ThankPages.propTypes = {
    match: PropTypes.any
}

export default ThankPages;