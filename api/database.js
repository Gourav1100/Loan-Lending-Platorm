// Database imports
const URI = "mongodb+srv://manchurianhotdog:VUpYHt2jaG9IiRW4@fliprr.jbq9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongodb = require("mongodb");
const client = new Mongodb.MongoClient(URI);
// API Imports
var Cibil = require("../modules/cibil.js")

async function get(req,res){
    try {
        // fetch request data
        let query = req.body;

        // fetch the posts
        await client.connect();
        const db = client.db("Flipr");
        let rdata = await db.collection(req.body.type).findOne({"_id": Mongodb.ObjectID(query._id)});

        await client.close();
        // return the posts
        return {
            message: rdata,
            success: true,
        };
    } catch (err) {
        // return the error
        return {
            message: new err.message,
            success: false,
        };
    }
}

async function update(req, res) {
    try {
        // connect to the database
        await client.connect();
        let db = client.db("Flipr");
        // get body data
        let query = req.body;
        // set update data
        let udata = {};
        if(query.type === "Users"){
            udata = {
                username: query.username,
                name: query.name,
                password: query.password,
                phone: query.phone,
                email: query.email,
                address: query.address,
                aadharnum: query.aadharnum,
                pannum: query.pannum,
                photo: query.photo,
                cibil: Cibil.cibil(query.noloans, query.loansrepaid),
                country: query.country,
                bankname: query.bankname,
                accountno: query.accountno,
                branch: query.branch,
                icode: query.icode,
                ctc: query.ctc,
                sslip: query.sslip,
                notifications: [],
                noloans: query.noloans,
                loansrepaid: query.loansrepaid,
            }
        }
        else if( query.type === "LoanHistory" ) {
            udata = {
                LoanID: query.LoanID,
                Borrower: query.Borrower,
                Lender: query.Lender,
                Amount: query.Amount,
                InterestRate: query.InterestRate,
                Time: query.Time,
            }
        }
        else if(query.type === "LoanRequest"){
            udata = {
                RequestID: query.RequestID,
                Borrower: query.Borrower,
                Amount: query.Amount,
                InterestRate: query.InterestRate,
                Time:query.Time,
                Offeres: query.Offers,
            }

        }
        else if(query.type === "LoanOffer"){
            udata = {
                OfferID: query.OfferID,
                RequestID: query.RequestID,
                Borrower: query.Borrower,
                Lender: query.Lender,
            }
        }
        else{
            return res.status(200).send({
                message: 'Invalid database type',
                success: false,
            });
        }
        // update the published status of the post
        await db.collection(query.type).updateOne({"_id": Mongodb.ObjectID(query._id)},{$set: udata});
        await client.close();
        // return a message
        return {
            message: 'Data updated successfully',
            success: true,
        };
    } catch (err) {

        // return an error
        return {
            message: err.message,
            success: false,
        };
    }
}

async function Delete(req, res) {
    try {
        // Connecting to the database
        await client.connect();
        let db = client.db("Flipr");

        // Deleting the post
        await db.collection(req.body.type).deleteOne({
            "_id": Mongodb.ObjectID(req.body._id),
        });
        await client.close();
        // returning a message
        return res.json({
            message: 'Data deleted successfully',
            success: true,
        });
    } catch (err) {
        // returning an error
        return res.json({
            message: err.message,
            success: false,
        });
    }
}

async function add(req, res) {
    try {
        // connect to database
        await client.connect();
        const db = client.db("Flipr");
        // set user query
        let query = req.body;
        //  set add data
        let adata;
        if(query.type === "Users"){
            adata = {
                username: query.username,
                name: query.name,
                password: query.password,
                phone: query.phone,
                email: query.email,
                address: query.address,
                aadharnum: query.aadharnum,
                pannum: query.pannum,
                photo: query.photo,
                cibil: Cibil.cibil(query.noloans, query.loansrepaid),
                country: query.country,
                bankname: query.bankname,
                accountno: query.accountno,
                branch: query.branch,
                icode: query.icode,
                ctc: query.ctc,
                sslip: query.sslip,
                notifications: [],
                noloans: query.noloans,
                loansrepaid: query.loansrepaid,
            }
        }
        else if( type === "post" ) {
            adata = {
                description: query.description,
                title: query.title,
                images: query.images,
                videos: query.videos,
            }
        }
        else{
            return {
                message: 'Invalid database type',
                success: false,
            };
        }
        await db.collection(req.body.type).insertOne(adata);
        await client.close();
        // return a message
        return {
            message: 'Data added successfully',
            success: true,
        };
    } catch (error) {
        // return an error
        return {
            message: new Error(error).message,
            success: false,
        };
    }
}



async function handler(req, res){
    var response = {
        success: false,
        message: "Invalid Request Type ! ",
    };
    switch(req.method){
        case "GET"      :
            response = await get(req, res);
            break;
        case "POST"     :
            response = await add(req, res);
            break;
        case "DELETE"   :
            response = await Delete(req, res);
            break;
        case "PUT"      :
            response = await update(req, res);
            break;
    }
    res.status(200).json(response);
    console.log(`API response : ${response.success}`);
}
exports.execute = handler;
