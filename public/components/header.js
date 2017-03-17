import React from 'react'
import { IndexLink } from "react-router";
import { connect } from "react-redux"
import GuestUserSection from './guestUserSection'
import LoggedUserSection from './loggedUserSection'
import AdminUserSection from './adminUserSection'

@connect(store =>{
    return{
        userLoggedIn : store.getUserLogin.userLoggedIn,
        isAdmin : store.getUserLogin.isAdmin
    }    
})
export default class Header extends React.Component{
    render(){
        const {userLoggedIn,isAdmin} = this.props;
        let userSection = null
        if(userLoggedIn == true && isAdmin == false){
            userSection = <LoggedUserSection/>
        }else if(userLoggedIn == true && isAdmin == true){
            userSection = <AdminUserSection/>
        }
        else{
            console.log("inside else")
            userSection = <GuestUserSection/>          
        }
        return(
            <header className="navbar navbar-inverse">
                <div className="container">
                    <nav>
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <IndexLink className="navbar-brand" to="/">Brand</IndexLink>
                            </div>
                            {userSection}
                        </div>
                        
                    </nav>
                </div>
            </header>
        )
    }
}