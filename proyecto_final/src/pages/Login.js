import React, { Component } from 'react';
import Form from '../components/Form';
import Login from '../components/login'
import Footer from '../components/Footer'
import "../css/main.css"

class formLogin extends Component{
    render(){
        return( 
            <div className="back_general">
                <div className="row">
                    <div className="col-md-12">
                    <Login/>
                    </div>
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

export default formLogin;