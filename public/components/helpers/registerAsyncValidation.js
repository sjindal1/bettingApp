import axios from 'axios'

const asyncValidate = (values) => {
        return axios.get("http://localhost:3000/api/users/"+values.email)
        .then(function(user){
            if(JSON.parse(user.request.response) !== null ){
                throw {email : "Email has already been used to create an accout"}
            }
        })
}

export default asyncValidate;