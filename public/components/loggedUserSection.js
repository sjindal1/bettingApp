import React from 'react'
import { Link } from "react-router";
import { connect } from "react-redux"
import {userLogout} from '../actions/loginActions'
import { browserHistory } from 'react-router'

let localStorage = global.window.localStorage

@connect(store => {
    return {}
})
export default class LoggedUserSection extends React.Component{
    logout(){
        localStorage.removeItem("token") 
        localStorage.removeItem("userEmail")       
        this.props.dispatch(userLogout())
        browserHistory.push('/')         
    }
    render(){
        return(
            <ul class="nav navbar-nav navbar-right">
                <li><Link to="/myaccount"><span class="glyphicon glyphicon-user"></span> My Account</Link></li>
                <li><a onClick={this.logout.bind(this)} href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
        )
    }
}