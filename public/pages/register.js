import React from 'react';
import { connect } from "react-redux"
import RegisterForm from '../components/registerform'
import {addUser, addUserAuthInfo} from '../actions/addUserAction'
import RegistrationSuccess from '../components/registrationSuccessful'

@connect((store) =>{
    return{
        submittingUser : store.register.submittingUser,
        userSubmitted : store.register.userSubmitted,
        userAuthSubmitted : store.registerAuth.userAuthSubmitted,
        submittingAuthUser : store.registerAuth.submittingAuthUser
    };
})
export default class Register extends React.Component{
    handleSubmit(values){
        this.props.dispatch(addUser(values))
        this.props.dispatch(addUserAuthInfo(values))
        console.log("user added")
        console.log(values);
    }
    render(){
        if(this.props.userSubmitted == false && this.props.userAuthSubmitted == false){
            return(
                <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            )
        }else{
            return(
                <RegistrationSuccess/>
            )
        }        
    }
} 