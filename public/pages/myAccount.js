import React from 'react';
import mystore from '../store'
import {connect} from 'react-redux'
import { getUser } from '../actions/addUserAction'

@connect(store => {
    return{
        user : store.getUser.user
    }
})
export default class MyAccount extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let localStorage = global.window.localStorage
        mystore.dispatch(getUser(localStorage.userEmail))
    }
    render(){
        return(
            <div className="container">
                <div className="col-lg-6 col-lg-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">Your Account Details</div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <td>{this.props.user.title} {this.props.user.first_name} {this.props.user.last_name}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Email</th>
                                    <td>{this.props.user.email}</td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}