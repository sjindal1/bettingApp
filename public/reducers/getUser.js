export default function reducer(state = {
    gettingUser : false,
    gotUser : false,
    user : {},
    err : null
},action){
    switch(action.type){
        case "USER_GET_PENDING" :{
            console.log("Entering pending")
            return Object.assign({}, state, {gettingUser : true});
            break;
        }
        case "USER_GET_REJECTED" : {
            console.log("Entering rejected")
            console.log(action.payload)
            return Object.assign({}, state, {gettingUser : false, err : action.payload});
            break;
        }
        case "USER_GET_FULFILLED" : {
            console.log("Entering fulfilled")
            console.log("Payload")
            console.log(action.payload);
            if(action.payload != null){
                return Object.assign({}, state, {gettingUser: false, gotUser : true, user : action.payload});
            }else{
                return Object.assign({}, state, {gettingUser: false, gotUser : false, err : "No User Found"});                
            }
            break;
        }
        default : {
            return Object.assign({}, state);
        }
    }
}