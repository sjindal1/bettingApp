var mongoose = require('mongoose');
var userAuthInfoSchema = mongoose.Schema({
    email : {type: String,
            index : {unique:true}},
    password : String     
});

module.exports = mongoose.model("usersAuthInfo", userAuthInfoSchema);