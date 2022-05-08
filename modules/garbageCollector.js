const URI = "mongodb+srv://manchurianhotdog:VUpYHt2jaG9IiRW4@fliprr.jbq9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongodb = require("mongodb");
const client = new Mongodb.MongoClient(URI);

function Beyond20days(req, res){
    
    try{
        await client.connect();

        const db = client.db("Flipr");
        

    }catch (err) {
        // return the error
        return {
            message: new err.message,
            success: false,
        };
    }
}