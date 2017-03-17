import {isUserLoggedIn} from '../actions/loginActions'

export default function reducer(state = {
    matchDataSaveInProgress : false,
    matchDataSaved : false,
    err : null
},action){
    switch(action.type){
        case "SAVE_MATCH_DATA_START" :{
            return Object.assign({}, state, {matchDataSaveInProgress : true})
        }
        case "SAVE_MATCH_DATA_REJECTED" : {
            console.log("Entering rejected")
            console.log(action.payload)
            return Object.assign({}, state, { matchDataSaveInProgress : false, err : action.payload});
            break;
        }
        case "SAVE_MATCH_DATA_FULFILLED" : {
            console.log("Entering fulfilled")
            return Object.assign({}, state, {matchDataSaveInProgress : false, matchDataSaved : true});
            break;
        }
        default : {
            return Object.assign({}, state);
        }
    }
}