import React, { Component } from 'react';
import '../../css/Form.css'
import PropTypes from 'prop-types';

class Input extends Component{
        constructor(props){
            super(props);
            this.state ={
                
                EntValor: ''
                              
            }
        this.onChange = this.onChange.bind(this);
        this.oPtValor = this.oPtValor.bind(this);
        }
        onChange(e){
            this.setState({EntValor: e.target.value});

        }
        oPtValor(){
            return this.state.EntValor;
        }
        render(){
            return(
                <div>
                    <label>{this.props.EtiLabel} </label>
                    <br/>
                    <input 
                    type= { this.props.EtiInput }
                    value= { this.state.EntValor }
                    onChange= {this.onChange}
                    required = {this.props.isRequired}
                    />
                    
                </div>
            );
        }
}

Input.propTypes = {
    EtiLabel: PropTypes.string,
    EtiInput: PropTypes.string,
    EntValor: PropTypes.string,
    isRequired:PropTypes.bool


}
export default Input;