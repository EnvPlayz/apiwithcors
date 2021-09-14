const { default: axios } = require("axios");
const { json } = require("express");
const express = require("express");
const app = express();
app.get("/", (req,res) => {
    res.send("server has nothing to do :D please enter something after this url for the server to start giving good responses")
});
app.get("/http/:url", (req,res) => {
    var url = req.params.url;
        axios.get(`http://${url}`).then(function (data) {
            if(data.status==200){
                res.send(data.data)
            }
            }).catch(err => {
                // res.send(err)
                res.send(`<center><hr>The request had an ${err.name} . try again and check spelling.${err.message}<hr>We tried to sent a GET request to ${err.config.url} <center>`)
            });
});
app.get("/https/:url", (req,res) => {
    var url = req.params.url;
    axios.get(`https://${url}`).then(function (data) {
        if(data.status==200){
            res.send(data.data)
        }
    }).catch(err => {
        // res.send(err)
        res.send(`<center><hr>The request had an ${err.name} . try again and check spelling.${err.message}<hr>We tried to sent a GET request to ${err.config.url}<center>`)
    });
});
app.get("/getfromapi/robloxname/:url", (req,res) => {
    var url = req.params.url;
    axios.get(`https://api.roblox.com/users/get-by-username?username=${url}`).then(function (data) {
        res.send(data.data)
    }).catch(err => {
        // res.send(err)
        res.send(`<center><hr>The request had an ${err.name} . try again and check spelling.${err.message}<hr>We tried to sent a GET request to ${err.config.url}<center>`)
    });
});
app.get("/getfromapi/robloxavatarhead/:url", (req,res) => {
    var url = req.params.url;
    axios.get(`https://thumbnails.roblox.com/v1/users/avatar-headshot?format=Png&isCircular=true&size=48x48&userIds=${url}`).then(function (data) {
        if(data.status==200){
            res.send({return:data.data})
        }
    }).catch(err => {
        // res.send(err)
        res.send(`<center><hr>The request had an ${err.name} . try again and check spelling.${err.message}<hr>We tried to sent a GET request to ${err.config.url}<center>`)
    });
});
app.listen(process.env.PORT || 5000);