const URI = "mongodb+srv://manchurianhotdog:VUpYHt2jaG9IiRW4@fliprr.jbq9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongodb = require("mongodb");
const client = new Mongodb.MongoClient(URI);

async function Beyond20days(req, res){
    
    try{
        var d = new Date();
        d.setHours(0,0,0);
        d.setDate(d.getDate() - 20);
        await client.connect();
        const db = client.db("Flipr");
        var trans = await db.collection("LoanRequest").find({"Date" : {$lt : d}}).toArray();
        await db.collection("LoanRequest").deleteMany({
            "Date" : {$lt : d}
        });
        let somdata = {}; let somarray = [];
        for (var i = 0; i < trans.length; i++){
            somdata = {
                requestid: trans[i]._id,
                accepted: false,
                borrower: trans[i].borrower,
                lender: null,
                amount: trans[i].amount,
                interestrate: trans[i].interestrate,
                time: trans[i].time,
                finaldate: new Date(),
            }
            somarray.push(somdata);
        }
        await db.collection("RequestHistory").insertMany(somarray);
        return res.status(200).json({
            success: true,
            message: "success",
        });

    }catch (err) {
        // return the error
        return res.status(200).json({
            message: new err.message,
            success: false,
        });
    }
}

async function EMIPenalty(req, res){
    
    try{
        var d = new Date();
        d.setHours(0,0,0);
        await client.connect();
        const db = client.db("Flipr");
        var val = await db.collection("ActiveLoans").find({
            "DateOfEMI" : {$lt : d}
        }).toArray();
        for(var i = 0; i < val.length; i++){
            val[i].Penalty += 1;
            await db.collection("ActiveLoans").updateOne({"_id": val[i]._id},{$set: val[i]});
        }
        return res.status(200).json({
            success: true,
            message: "success",
        });

    }catch (err) {
        // return the error
        return res.status(200).json({
            message: new err.message,
            success: false,
        });
    }
}

async function sslipcond(req, res){
    try{
        var d = new Date();
        d.setHours(0,0,0);
        d.setDate(d.getDate() - 2);
        await client.connect();
        const db = client.db("Flipr");
        await db.collection("Users").deleteMany({"datecreated" : {$lt : d}}); 
        return res.status(200).json({
            success: true,
            message: "success",
        });
    } catch (err) {
        // return the error
        return res.status(200).json({
            message: new err.message,
            success: false,
        });
    }

}

exports.Beyond20days = Beyond20days;
exports.EMIPenalty = EMIPenalty;
exports.sslipcond = sslipcond;