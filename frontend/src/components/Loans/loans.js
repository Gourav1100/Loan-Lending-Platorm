import react from "react";
import axios from "axios";

import {
    Card,
    Table,
    Container,
} from "react-bootstrap";
import Lcard from "../lcard/lcard.js";
import OfferCard from "../offercard/offercard.js";
import RequestCard from "../request_card/request_card.js";



class Loans extends react.Component {

    constructor(props){
        super(props);
        this.state = {
            nameBorrower: "",
            nameLender: "",
            data: [],
            data1:[],
            DataisLoaded: false,
            Data1isLoaded: false,
            nameBorrowerisLoaded: false,
            nameLenderisLoaded: false,
        };
    }
    componentDidMount(){
        
        try{
            axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
                type: "MoneyLended",
                userid: window.sessionStorage.getItem("userid"), 
                method: "GET",
            }).then((res) => {
                if(res.data.success===true){
                    axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
                        type: "MoneyBorrowed",
                        userid: window.sessionStorage.getItem("userid"), 
                        method: "GET",
                    }).then((res1) => {
                        if(res1.data.success===true){
                            axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
                                    type: "GetUsername",
                                    userid: res.data.message.borrower, 
                                    method: "GET",
                                }).then((res2) => {
                                    if(res2.data.success===true){
                                        axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
                                            type: "GetUsername",
                                            userid: res1.data.message.lender, 
                                            method: "GET",
                                        }).then((res3) => {
                                            if(res3.data.success===true){
                                                this.setState({
                                                    data: res.data.message,
                                                    data1: res1.data.message,
                                                    DataisLoaded: true,
                                                    Data1isLoaded: true,
                                                    nameBorrower: res2.data.message,
                                                    nameLender: res3.data.message,
                                                    nameBorrowerisLoaded: true,
                                                    nameLenderisLoaded: true,
                                                })
                                                return true;
                                            }
                                        })
                                    }
                                });
                        }
                    });
                }    
            });
        }
        catch(err){
            this.setState({
                nameBorrower: "",
                nameLender: "",
                data: [],
                data1:[],
                DataisLoaded: false,
                Data1isLoaded: false,
                nameBorrowerisLoaded: true,
                nameLenderisLoaded: false,
            })
            console.log(`Error: ${err.message}`);
            return true;
        } 
    }

    

    render(props){
        var renderElement = (
            <>
            <h3 className="p-2 mt-4" >Money Lended</h3>
            {
                this.state.data.map((item)=>{
                    var DATE = new Date (item.date);
                    var day, month, year;
                    day = DATE.getDate();
                    month = DATE.getMonth();
                    year = DATE.getFullYear();
                    return (<>
                        <OfferCard lender={this.setState.nameBorrower} amount={item.amount} interestrate={item.interestrate} time={item.time} finaldate={(day + "-"+  month +"-" + year)}/>
                    </>);
                })
            }
          
            <h3 className="p-2 mt-4" >Money Borrowed</h3>
            {
                this.state.data.map((item)=>{
                    var DATE = new Date (item.date);
                    var day, month, year;
                    day = DATE.getDate();
                    month = DATE.getMonth();
                    year = DATE.getFullYear();

                    
                    return (<>
                        <Lcard borrower={this.setState.nameLender} amount={item.amount} interestrate={item.interestrate} time={item.time} date={(day + "-"+  month +"-" + year)} />
                    </>);
                })
            }
            </>
        );
        if(!this.state.DataisLoaded || !this.state.Data1isLoaded || !this.state.nameBorrowerisLoaded || !this.state.nameLenderisLoaded)
        {
            return(<>
            <h3>Data is loading</h3>
            </>)
        }
        else if(this.state.DataisLoaded && this.state.Data1isLoaded && this.state.nameBorrowerisLoaded && this.state.nameLenderisLoaded)
        {
            return renderElement;
        }
        return (<>No data available.</>)
        
    }
}

export default Loans;