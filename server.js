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
            });
});
app.get("/https/:url", (req,res) => {
    var url = req.params.url;
    axios.get(`https://${url}`).then(function (data) {
        if(data.status==200){
            res.send(data.data)
        }
    });
});
app.listen(5000);