import axios from 'axios'

export function addUser(user){
    return {
        type: "REGISTER_USER",
        payload: axios.post(
        "http://localhost:3000/api/users",
        {title : user.title,
        first_name : user.first_name,
        last_name : user.last_name,
        email : user.email
       })
    }
}

export function addUserAuthInfo(user){
    return {
        type: "REGISTER_USER_AUTH",
        payload: axios.post(
        "http://localhost:3000/api/users-auth",
        {
            email : user.email,
            password : user.password   
        })
    }
}

export function getUser(email){
    console.log("entering get user email : " + email);
    return dispatch => {
        axios.get("http://localhost:3000/api/users/"+email)
        .then(response => {
            dispatch({
                type : "USER_GET_FULFILLED",
                payload : response.data
            })
        })
        .catch(err => {
            dispatch({
                type : "USER_GET_REJECTED",
                payload : err
            })
        })
    }    
}