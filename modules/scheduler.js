var garbage = require("./garbageCollector");

function schedule()
{
    console.log("called");
    garbage.EMIPenalty();
    garbage.Beyond20days();
}

exports.func = schedule;
