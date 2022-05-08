var garbage = require("./garbageCollector");

function schedule()
{
    garbage.EMIPenalty();
    garbage.Beyond20days();
}

exports.func = schedule;
