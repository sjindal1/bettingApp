import axios from 'axios'
import {authSuccess, authError} from '../../actions/loginActions'
import {getUser} from '../../actions/addUserAction'
import store from "../../store"
import { SubmissionError } from 'redux-form'
import { browserHistory } from 'react-router'

let localStorage = global.window.localStorage;

const submit = (values) => {
    console.log("Login form submitted from submit.js");
    console.log(values);
    console.log(values.email);
    console.log(values.password);
    return axios.post("http://localhost:3000/api/users-login",
        {email:values.email,
        password : values.password})
        .then(response => {
            let {validated} = response.data;
            if(validated){
                let token = response.data.token
                localStorage.token = token
                localStorage.userEmail = response.data.email
                store.dispatch(authSuccess(response.data))                
                browserHistory.push('/')         
            }else{
                throw new SubmissionError({_error : "The entered email or password is incorrect"})
            }
        })

}

export default submit