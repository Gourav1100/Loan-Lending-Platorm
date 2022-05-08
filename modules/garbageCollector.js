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
        await db.collection("LoanRequest").deleteMany({
            "Date" : {$lt : d}
        });
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
exports.execute = Beyond20days;