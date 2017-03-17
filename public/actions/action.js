import axios from 'axios'

export function getMatchData(){
    return dispatch => {
        dispatch({type : "MATCH_DATA_START"})
        axios.post("http://localhost:3000/api/match-data")
        .then(response => {
            dispatch({
                type : "MATCH_DATA_FULFILLED",
                payload : response.data
            })
        })
        .catch(err => {
            dispatch({
                type : "MATCH_DATA_REJECTED",
                payload : err
            })
        })
    }    
}

export function saveMatchData(match){
    return dispatch => {
        dispatch({type : "SAVE_MATCH_DATA_START"})
        axios.post("http://localhost:3000/api/store-match-data",{match : match})
        .then(response => {
            dispatch({
                type : "SAVE_MATCH_DATA_FULFILLED",
                payload : response.data
            })
        })
        .catch(err => {
            dispatch({
                type : "SAVE_MATCH_DATA_REJECTED",
                payload : err
            })
        })
    }    
}