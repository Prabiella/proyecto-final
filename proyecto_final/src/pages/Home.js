import React, { Component } from 'react';
import Slide from '../components/Slide';
import Form from '../components/Form';
import Map from '../components/Map';
import Footer from '../components/Footer'
import "../css/main.css"

class Home extends Component{
        render(){
            return( 
                <div className="back_general">

                    <div className="row">
                        <div className="col-md-12">
                        <Slide/>
                    </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <Form/>
                        </div>
                        
                        <div className="col-md-12">
                        <Map/>
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

export default Home;