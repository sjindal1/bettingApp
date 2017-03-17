import {isUserLoggedIn, isAdminUser} from '../actions/loginActions'

export default function reducer(state = {
    gettingUserLoggedIn : true,
    userLoggedIn : false,
    isAdmin : false,
    err : null
},action){
    switch(action.type){
        case "GET_USER_LOGIN_REJECTED" : {
            console.log("Entering rejected")
            console.log(action.payload)
            return Object.assign({}, state, { err : action.payload});
            break;
        }
        case "GET_IF_USER_ALREADY_LOGGED_IN" : {
            return Object.assign({}, state, { gettingUserLoggedIn : true});            
        }
        case "GET_USER_LOGIN_FULFILLED" : {
            console.log("Entering fulfilled")
            console.log("Payload")
            console.log(action.payload.validated);
            if(action.payload.validated == true && action.payload.isAdmin == true){
                return Object.assign({}, state, {gettingUserLoggedIn : false, userLoggedIn : true, isAdmin : true});
            }else if(action.payload.validated == true && action.payload.isAdmin == false){
                return Object.assign({}, state, {gettingUserLoggedIn : false, userLoggedIn : true, isAdmin : false});                
            }else{
                return Object.assign({}, state);
            }
            break;
        }
        case "USER_ALREADY_LOGGED_IN" :{
            if(action.payload.isAdmin == true){
                return Object.assign({}, state, {gettingUserLoggedIn : false, userLoggedIn : true, isAdmin : true});                            
            }else{
                return Object.assign({}, state, {gettingUserLoggedIn : false, userLoggedIn : true, isAdmin : false});                                            
            }
        }
        case "USER_LOGOUT" : {
            return Object.assign({}, state, {gettingUserLoggedIn : false, userLoggedIn : false, isAdmin : false});
        }
        default : {
            return Object.assign({}, state);
        }
    }
}