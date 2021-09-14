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
app.get("/gamejoin/",(req,res) =>{
    axios.get("https://www.roblox.com/games/getgameinstancesjson?placeId=286090429&startindex=0").then(function (data) {
            console.log(data.data)
    })
})
app.listen(process.env.PORT || 5000);