import React from 'react'
import { Link } from "react-router";

export default class GuestUserSection extends React.Component{
    render(){
        return(
            <ul class="nav navbar-nav navbar-right">
                <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            </ul>
        )
    }
}