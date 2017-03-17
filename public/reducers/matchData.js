import {isUserLoggedIn} from '../actions/loginActions'

export default function reducer(state = {
    matchDataInProgress : true,
    matchData : {},
    err : null
},action){
    switch(action.type){
        case "MATCH_DATA_START" :{
            return Object.assign({}, state, {matchDataInProgress : true})
        }
        case "MATCH_DATA_REJECTED" : {
            console.log("Entering rejected")
            console.log(action.payload)
            return Object.assign({}, state, { matchDataInProgress : false, err : action.payload});
            break;
        }
        case "MATCH_DATA_FULFILLED" : {
            console.log("Entering fulfilled")
            return Object.assign({}, state, {matchDataInProgress : false, matchData : action.payload});
            break;
        }
        default : {
            return Object.assign({}, state);
        }
    }
}