import React from 'react';
import AddMatchForm from '../components/addMatchForm'
import {saveMatchData} from '../actions/action'
import {connect} from 'react-redux'

@connect(store => {
    return{}
})
export default class AddMatch extends React.Component{
    handleSubmit(values){
        console.log(values)
        this.props.dispatch(saveMatchData(values))
    }
   render(){
       return(
            <div className="container">
                <AddMatchForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
       )  
    }
} 