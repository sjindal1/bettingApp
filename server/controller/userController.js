var mongoose = require('mongoose');
var Users = require('../data/users');
var MatchData = require('../data/match');
var UserAuthInfo = require('../data/usersAuthInfo');
var _ = require('underscore');
var jwt = require('jsonwebtoken');

var router = require("express").Router();
router.route("/users/:id?").post(addUser).delete(deleteUser).get(getUser)
router.route("/users-auth").post(addUserAuth)
router.route("/users-login").post(getUserForLogin)
router.route("/user-token-valid").post(getUserTokenValid)
router.route("/match-data").post(getMatchData)
router.route("/match-data-bynumber").post(getMatchDataByNumber)
router.route("/store-match-data").post(saveMatchData)

function getMatchDataByNumber(req,res){
    matchNumber = req.body.matchNumber;
    MatchData.findOne({number : matchNumber}, function(err,match){
        if(err){
            res.json({matchExists : false})
        }else{
            if(match == null){
                res.json({matchExists : false})                
            }else{
                res.json({matchExists : true, match: match})                                
            }
        }
    })
}

function getUserTokenValid(req,res){
    token = req.body.token;
    console.log(token)
    jwt.verify(token,"some secret message", function(err,user){
        if (err) res.json({validToken:false, err:err})
        else{
            UserAuthInfo.findOne({email:user._doc.email}, function(err,userResult){
                if(err){
                    res.json({validToken:false, err:err})
                }else{
                    if(userResult != null){
                        if(userResult.email == "admin@admin.com"){
                            res.json({validToken:true, isAdmin : true})
                        }else{
                            res.json({validToken:true, isAdmin : false})
                        }
                    }else{
                        res.json({validToken:false})
                    }
                }
            })
        }        
    })
    
}

function saveMatchData(req,res){
    var number = req.body.match.number;
    var time = req.body.match.time;
    var day = req.body.match.day;
    var stadium = req.body.match.stadium;
    var team1_name = req.body.match.team1_name;
    var team1_icon = req.body.match.team1_icon;
    var team2_name = req.body.match.team2_name;
    var team2_icon = req.body.match.team2_icon;
    var result = req.body.match.result;
    console.log(req.body.match)
    var matchData = new MatchData({
        "number" : number,
        "schedule" : {
            "time" : time,
            "day" : day,
            "stadium" : stadium
        },
        "teams" : {
            "team1" : {
                "name" : team1_name,
                "icon" : team1_icon
            },
            "team2" : {
                "name" : team2_name,
                "icon" : team2_icon
            }
        },
        "Result" : result 
    })
    console.log(matchData)
    matchData.save(function(err){
        if(err){
            res.send(err)
        }else{
            console.log("match data saved successfully")
            res.send(matchData)
        }
    })
}

function getMatchData(req,res){
    MatchData.find({}, null, {sort : {number : 1}}, function(err,matchesInfo){
        if(err){
            console.log("entering error")
            console.log(err)
            res.send(err)
        }else{
            console.log("entering match data success")
            res.json(matchesInfo)
        }
    })
}

function getUserForLogin(req,res){
    console.log("request body" + req.body.email)
    var email = req.body.email;
    var password = req.body.password;
    console.log("Finding user with email id "+ email)
    UserAuthInfo.findOne({email : email}, function(err,user){
        if(err){
            console.log("entering error");
            console.log(err);
            res.send(err);
        }else{
            if(user != null){
                console.log("found user");
                console.log(user);
                if(user.email == email && user.password == password){
                    token = jwt.sign(user,"some secret message",{expiresIn: 60*30})
                    if(user.email == "admin@admin.com"){
                        res.json({validated : true, email : user.email, isAdmin: true, token : token})
                    }else{                        
                        res.json({validated : true, email : user.email, isAdmin: false, token : token})
                    }
                }else{
                    res.json({validated :false})
                }
            }else{  
                console.log("user not found");                    
                res.json({validated :false})                
            }
            
        }
    })
}

function addUserAuth(req,res){
    var userAuthInfo = new UserAuthInfo(_.extend({},req.body));        
    userAuthInfo.save(function (err){
        if(err)
            res.send(err)
        else
            console.log(userAuthInfo);  
            res.json(userAuthInfo);
            console.log("User saved successfully");
    });
}

function getUser(req,res){
    console.log("Entering getUser in userController");
    var email = req.params.id;
    console.log("email in userController" + email);
    Users.findOne({email : email},function(err,user){
        if(err){
            console.log("entering error");
            console.log(err);
            res.send(err);
        }else{
            console.log("found user");
            console.log(user);
            res.json(user)
        }
    })
}
function addUser(req,res){
    var user = new Users(_.extend({},req.body));
    user.save(function (err){
        if(err)
            res.send(err)
        else
            console.log(user);  
            res.json(user);
            console.log("User saved successfully");
    });
}
function deleteUser(req,res){
    var id = req.params.id;
    Users.remove({_id:id},function(err,removed){
        if(err){
            res.send(err)
        }else
            console.log(removed);
            res.json(removed);
    });
}

module.exports = router;