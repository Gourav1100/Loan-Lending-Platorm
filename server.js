// global imports
var express = require("express");
var cron = require("node-cron");
var app = express();
var bodyParser = require("body-parser");
var schd = require("./modules/scheduler");
// configure server for logging.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// accept all requests
app.all("*", (req, res, func) => {
    const regex = /[/]api[/]/g;
    console.log(`Incoming request from ${req.ip} to ${req.url}`);
    if( regex.test(req.url) ){
        try {
            console.log(`Loading .${req.url}`);
            var api = require(`.${req.url}`);
            try {
                api.execute(req, res);
            }
            catch(err){
                console.log(`Error: ${err.message}`)
            }
        }
        catch(err){
            console.log(`Failed to load .${req.url} ! \n error: ${err.message}`)
            res.status(200).json({
                success: false,
                message: err.message,
            });
        }
    }
    else{
        res.status(200).json({
            success: false,
            message: "Page not found ! ",
        });
    }
});


// run server.
const port = process.env.PORT || 5000;
app.listen(port, (req,res) => {
    console.log(`Server Running at port: ${port}`);
});

// to prevent server from crashing.
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.msg}`);
})

const jab = cron.schedule("0 0 0 * *", schd.func);