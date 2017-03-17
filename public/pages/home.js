import React from 'react';
import styles from '../styles/styles'
import {connect} from 'react-redux'
import MatchesInfo from '../components/matchesInfo'
import LoginComp from '../components/login'
import  {isUserLoggedIn} from '../actions/loginActions'

@connect(store => {
    return{
        userLoggedIn : store.getUserLogin.userLoggedIn,
    }
})
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.userLoggedIn){
            return(<MatchesInfo/>)
        }else{
            return (
                <LoginComp />
            )
        }
        
    }
}