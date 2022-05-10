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
            data: [],
            data1:[],
            DataisLoaded: false,
            Data1isLoaded: false,
            nameBorrower: "",
            nameLender: "",
        };
    }
    componentDidMount(){
        
        axios.post("http://localhost:5000/api/database",{
            type: "MoneyLended",
            userid: "6279924a8a48a3dff9e9288f",//window.sessionStorage.getItem("userid"), 
            method: "GET",
        }).then((res) => {
            axios.post("http://localhost:5000/api/database",{
                type: "MoneyBorrowed",
                userid: "6279924a8a48a3dff9e9288f" ,//window.sessionStorage.getItem("userid"), 
                method: "GET",
            }).then((res1) => {
                axios.post("http://localhost:5000/api/database",{
                        type: "GetUsername",
                        userid: res.data.message.borrower, 
                        method: "GET",
                    }).then((res2) => {

                        axios.post("http://localhost:5000/api/database",{
                        type: "GetUsername",
                        userid: res1.data.message.lender, 
                        method: "GET",
                    }).then((res3) => {
                        this.setState({
                            data: res.data.message,
                            data1: res1.data.message,
                            DataisLoaded: true,
                            Data1isLoaded: true,
                            nameBorrower: res2.data.message,
                            nameLender: res1.data.message,
                    })

                       
                        })
                    });
            });    
        });

        
        
    }

    

    render(props){
        if(!this.state.DataisLoaded || !this.state.Data1isLoaded)
        {
            return(<>
            Data is loading
            </>)
        }
        
        return(
            <>
            <h3 className="p-2 mt-4" >Money Lended</h3>
            {
                this.state.data.map((item)=>{
                    var DATE = new Date (item.date);
                    var day, month, year;
                    day = DATE.getDate();
                    month = DATE.getMonth();
                    year = DATE.getFullYear();


                    console.log(this.setState.nameBorrower);
                    return (<>
                        <Lcard bidder={this.setState.nameBorrower} amount={item.amount} interestrate={item.interestrate} time={item.time} date={(day + "-"+  month +"-" + year)}/>
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
                        <OfferCard bidder={this.setState.nameLender} amount={item.amount} interestrate={item.interestrate} time={item.time} finaldate={(day + "-"+  month +"-" + year)} />
                    </>);
                })
            }
            </>
        );
    }
}

export default Loans;