import axios from 'axios'

const asyncValidate = (values) => {
        return axios.post("http://localhost:3000/api/match-data-bynumber",{matchNumber : values.number})
        .then(function(match){
            console.log(match.data)
            if(match.data.matchExists == true){
                throw {number : "Match number already exists"}
            }
        })
}

export default asyncValidate;