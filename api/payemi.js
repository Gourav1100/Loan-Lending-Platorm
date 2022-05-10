const URI = "mongodb+srv://manchurianhotdog:VUpYHt2jaG9IiRW4@fliprr.jbq9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongodb = require("mongodb");
const client = new Mongodb.MongoClient(URI);
const url = require("url");

async function PayEMI(req, res){
    try {
        // fetch request data
        let query = req.body._id;
        // fetch the posts
        await client.connect();
        const db = client.db("Flipr");
        var emi = await db.collection("ActiveLoans").find({_id : Mongodb.ObjectID(query)}).toArray();
        emi = emi[0];
        emi.dateofemi = emi.dateofemi.setMonth(emi.dateofemi.getMonth() + 1);
        emi.emileft -= 1;
        if (emi.emileft == 0){
            await db.collection("LoanHistory").updateOne({_id : Mongodb.ObjectID(emi.loanid)}, {$set:{paid:true}});
            let bor = db.collection("Users").find({_id: Mongodb.ObjectID(emi.borrower)}).toArray()[0].loansrepaid + 1;
            await db.collection("Users").updateOne({_id: Mongodb.ObjectID(emi.borrower)}, {$set: {loansrepaid : bor}});
            await db.collection("ActiveLoans").deleteOne({_id: Mongodb.ObjectID(emi._id)});
        }
        await db.collection("ActiveLoans").updateOne({_id : Mongodb.ObjectID(query)}, {$set: {dateofemi: new Date(emi.dateofemi), emileft: emi.emileft}});
        await client.close();
        // return the posts
        return {
            message: "EMI payment Successful!",
            success: true,
        };
    } catch (err) {
        // return the error
        return {
            message: err.message,
            success: false,
        };
    }
}

async function handler(req, res){
    var response = {
        success: false,
        message: "Invalid Request Type ! ",
    };
    switch(req.body.method){
        case "POST"     :
            response = await PayEMI(req, res);
            break;
    }
    console.log(`API response : ${response.success}`);
    return res.status(200).json(response);
}
exports.execute = handler;