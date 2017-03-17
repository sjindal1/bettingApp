import React from 'react'
import {connect} from 'react-redux'
import styles from '../styles/styles'
import {getMatchData} from '../actions/action'
import myStore from '../store'

@connect(store => {
    return{
        matchDataInProgress : store.matchData.matchDataInProgress,
        matches : store.matchData.matchData
    }
})
export default class MatchesInfo extends React.Component{
    componentWillMount(){
        myStore.dispatch(getMatchData())
    }
    render(){
        const {matchDataInProgress} = this.props;
        
        if(matchDataInProgress){
            console.log("inside if")
            return (
                <div className="loader">
                </div>
            )
        }else{
            console.log("inside else")
            const {matches} = this.props;            
            const renderMatches = matches.map((match, index)=>{
                return(
                    <div key={index}>
                        <h3 style={styles.matchDate}>{match.schedule.day}</h3>
                        <div className="row" style={styles.matchContainer}>
                            <div className="col-sm-3" style={styles.matchResults}>
                                <strong>{match.Result}</strong>
                            </div>
                            <div className="col-sm-6" style={styles.matchTeams}>
                                <div style={styles.timeInfo}>
                                    <strong>Match {match.number} {match.schedule.time}, {match.schedule.stadium}</strong>
                                </div>
                                <div style={styles.matchTeamInfo}>
                                    <strong>{match.teams.team1.name}</strong> 
                                    <div className={match.teams.team1.icon}></div> 
                                    <strong>vs</strong>
                                    <div className={match.teams.team2.icon}></div>
                                    <strong>{match.teams.team2.name}</strong>                             
                                </div>
                            </div>
                            <div className="col-sm-3" style={styles.matchBet}>
                                <button type="button" className="btn btn-primary">Place My Bet</button>
                            </div>
                        </div>
                    </div>
                )
            })
            return(
                <div className="container">  
                    {renderMatches}              
                </div>
            )
        }
    }
}