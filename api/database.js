// Database imports
const URI = "mongodb+srv://manchurianhotdog:VUpYHt2jaG9IiRW4@fliprr.jbq9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Mongodb = require("mongodb");
const client = new Mongodb.MongoClient(URI);
// API Imports
var Cibil = require("../modules/cibil.js")

async function get(req,res){
    try {
        // fetch request data
        let query = req.body
        let rdata = [];
        // fetch the posts
        await client.connect();
        const db = client.db("Flipr");
        if(query.type === "Users"){
            rdata = await db.collection(query.type).findOne({_id : Mongodb.ObjectID(query._id)});
        }
        else if(query.type==="Login"){
            rdata = await db.collection("Users").findOne({email : query.email, password: query.password});
        }
        else if (query.type == "MoneyLended"){
            rdata = await db.collection("LoanHistory").find({"lender": Mongodb.ObjectID(query.userid)}).toArray();
        }
        else if (query.type == "MoneyBorrowed"){
            rdata = await db.collection("LoanHistory").find({"borrower": Mongodb.ObjectID(query.userid)}).toArray();
        }
        else {
            rdata = await db.collection(query.type).find().toArray();
        }
        await client.close();
        // return the posts
        if(rdata === [] || rdata === null){
            return {
                message: "No Entry Found.",
                success: "False",
            }
        }
        return {
            message: rdata,
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

async function update(req, res) {
    try {
        // connect to the database
        await client.connect();
        let db = client.db("Flipr");
        // get body data
        let query = req.body
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
                notifications: query.notifications,
                noloans: query.noloans,
                loansrepaid: query.loansrepaid,
            }
        }
        else if( query.type === "LoanHistory" ) {
            udata = {
                loanid: query.loanid,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                interestrate: query.interestrate,
                time: query.time,
                paid: query.paid,
            }
        }
        else if(query.type === "LoanRequest"){
            udata = {
                requestid: query.requestid,
                borrower: query.borrower,
                amount: query.amount,
                interestrate: query.interestrate,
                time:query.time,
                offeres: query.offers,
            }

        }
        else if(query.type === "LoanOffer"){
            udata = {
                offerid: query.offerid,
                requestid: query.requestid,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                interestrate: query.interestrate,
                time: query.time,
            }
        }
        else if(query.type === "ActiveLoans"){
            udata = {
                loanid: query.loanid,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                payable: query.payable,
                interestrate: query.interestrate,
                dateofemi: query.dateofemi,
                emi: query.emi,
                penalty: query.penalty,
                emileft: query.emileft,
            }
        }
        else if(query.type === "RequestHistory"){
            udata = {
                requestid: query.requestid,
                accepted: query.accepted,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                payable: query.payable,
                interestrate: query.interestrate,
                time: query.time,
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
        let query = req.body
        //  set add data
        let adata = {};
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
        else if( query.type === "LoanHistory" ) {
            adata = {
                loanid: Mongodb.ObjectID(query.loanid),
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                interestrate: query.interestrate,
                time: query.time,
                paid: query.paid,
                date: new Date(),
            }
        }
        else if(query.type === "LoanRequest"){
            adata = {
                requestid: query.requestid,
                borrower: query.borrower,
                amount: query.amount,
                interestrate: query.interestrate,
                time:query.time,
                offeres: [],
                date: new Date(),
            }

        }
        else if(query.type === "LoanOffer"){
            adata = {
                offerid: query.offerid,
                requestid: query.requestid,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                interestrate: query.interestrate,
                time: query.time,
                date: new Date(),
            }
        }
        else if(query.type === "ActiveLoans"){
            adata = {
                loanid: query.loanid,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                payable: query.payable,
                interestrate: query.interestrate,
                dateofemi: query.dateofemi,
                emi: query.emi,
                penalty: query.penalty,
                emileft: query.emileft,
            }
        }
        else if(query.type === "RequestHistory"){
            adata = {
                requestid: query.requestid,
                accepted: query.accepted,
                borrower: query.borrower,
                lender: query.lender,
                amount: query.amount,
                payable: query.payable,
                interestrate: query.interestrate,
                time: query.time,
                finaldate: new Date(),
            }
        }
        else{
            return res.status(200).send({
                message: 'Invalid database type',
                success: false,
            });
        }
        // update the published status of the post
        await db.collection(query.type).insertOne(adata);
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



async function handler(req, res){
    var response = {
        success: false,
        message: "Invalid Request Type ! ",
    };
    switch(req.body.method){
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
    console.log(`API response : ${response.success}`);
    return res.status(200).json(response);
}
exports.execute = handler;
