var garbage = require("./garbageCollector");

function schedule()
{
    garbage.EMIPenalty();
    garbage.Beyond20days();
    garbage.sslipcond();
}

exports.func = schedule;
