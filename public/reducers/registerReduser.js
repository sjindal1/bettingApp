export default function reducer(state = {
    submittingUser : false,
    userSubmitted : false,
    user : [],
    error : null
}, action){
    switch(action.type){
        case "REGISTER_USER_PENDING" : {
            console.log("Entering register user pending");
             return Object.assign({}, state, { submittingUser : true});
        }
        case "REGISTER_USER_REJECTED" : {
            console.log("Entering register user Rejected");            
             return Object.assign({}, state, { submittingUser:false, error: action.payload});

        }
        case "REGISTER_USER_FULFILLED" : {
            console.log("Entering register user fulfilled");   
            console.log(action.payload)         
            return Object.assign({}, state, {
                submittingUser:false, 
                userSubmitted: true, 
                user: action.payload.request.response
            });
        }
        default : {
            return Object.assign({}, state);
        }
    }
}