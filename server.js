// global imports
var app = require("express")();

// configure server for logging.
app.all("*", (req, res, func) => {
    const regex = /[/]api[/]/g;
    console.log(`Incoming request from ${req.ip} to ${req.url}`);
    if( regex.test(req.url) ){
        try {
            console.log(`Loading .${req.url}`);
            var api = require(`.${req.url}`);
            api.execute(req, res);
        }
        catch(err){
            console.log(`Failed to load .${req.url} !`)
            res.status(200).json({
                success: false,
                message: "Invalid API Url ",
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
