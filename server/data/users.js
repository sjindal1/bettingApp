var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    title : String,
    first_name : String,
    last_name : String,
    email : {type: String,
            index : {unique:true}}
});

module.exports = mongoose.model("users", userSchema);