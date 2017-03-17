import React from 'react'
import {Route,Router,browserHistory,IndexRoute, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {connect} from 'react-redux'
import store from '../store'
import Layout from "../pages/layout"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"
import MyAccount from "../pages/myAccount"
import AddMatch from "../pages/addMatch"
import {isUserLoggedIn, isAdminUser} from '../actions/loginActions'

const history = syncHistoryWithStore(browserHistory, store);

function checkauth(nextState, replace){
    let {userLoggedIn,isAdmin} = store.getState().getUserLogin
    console.log(nextState)
    console.log(userLoggedIn)
    switch(nextState.location.pathname){
        case "/myaccount" : {
            console.log("inside case myaccount")
            if(!userLoggedIn){
                if (nextState.location.state && nextState.location.pathname) {
                    replace(nextState.location.pathname)
                } else {
                    replace('/')
                }
            }
            break;
        }
        case "/addmatch" : {
            console.log("inside case addmatch")
            console.log(userLoggedIn)
            console.log(isAdmin)
            console.log(!userLoggedIn && !isAdmin)
            if(!isAdmin){
                if (nextState.location.state && nextState.location.pathname) {
                    replace(nextState.location.pathname)
                } else {
                    replace('/')
                }
            }
            break;
        }
        default : {
            if(userLoggedIn){
                if (nextState.location.state && nextState.location.pathname) {
                    replace(nextState.location.pathname)
                } else {
                    replace('/')
                }
            }
        }
    }
}

@connect(store => {
    return {
        gettingUserLoggedIn : store.getUserLogin.gettingUserLoggedIn
    }
})
export default class MyRoutes extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        store.dispatch(isUserLoggedIn())
    }
    render(){
        if(this.props.gettingUserLoggedIn){
            return (
                <div className="container">
                    <div className="loader"/>
                </div>
            )
        }else{
            return (
                <Router history={history}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Home}></IndexRoute>
                        <Route onEnter={checkauth}>
                            <Route path="login" component={Login}></Route>
                            <Route path="register" component={Register}></Route>
                            <Route path="myaccount" component={MyAccount}/>
                            <Route path="addmatch" component={AddMatch}/>
                        </Route>
                        <Route path="/assets/*"></Route>
                    </Route>
                </Router>
            )
        }
    }
}
        