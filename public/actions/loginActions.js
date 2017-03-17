import axios from 'axios'

export function authSuccess(data){
    console.log("inside get user auth")
    return {type : "GET_USER_LOGIN_FULFILLED" , payload : data}
}

export function authError(err){
    console.log("inside auth Error")
    return {type : "GET_USER_LOGIN_REJECTED" , payload : err}
}

export function userLogout(){
    console.log("inside user logout")
    return {type : "USER_LOGOUT"}
}

export function isAdminUser(){
    return false
}

export function isUserLoggedIn(){
    let localStorage = global.window.localStorage;
    let validToken = false;
    console.log("inside isUserLoggedIn")
    console.log(localStorage.token)
    if(localStorage.token !=null){
        console.log(localStorage.token)
        let data = {"token": localStorage.token}
        return dispatch => {
            dispatch({type: "GET_IF_USER_ALREADY_LOGGED_IN"})
            axios.post("http://localhost:3000/api/user-token-valid", data)
            .then((response) => {          
                    if(response.data.validToken){
                        console.log("inside token validated")
                        dispatch({type: "USER_ALREADY_LOGGED_IN", payload : response.data})
                    }else{
                        localStorage.removeItem("token")
                        localStorage.removeItem("userEmail")
                        dispatch({type : "USER_LOGOUT"})
                    }
            })
                
        }
    }else{
        return {type : "USER_LOGOUT"}
    }
}