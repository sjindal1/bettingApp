var mongoose = require('mongoose');
var matchSchema = mongoose.Schema({
    number : Number,
    schedule : {
        time : String,
        day : String,
        stadium : String
    },
    teams : {
        team1 : {
            name : String,
            icon : String
        },
        team2 : {
            name : String,
            icon : String
        }
    },
    Result : String 
});

module.exports = mongoose.model("matchData", matchSchema);