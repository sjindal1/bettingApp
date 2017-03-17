import React from 'react';
import { connect } from "react-redux"
import LoginComp from '../components/login'

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <LoginComp />
        )
    }
}
