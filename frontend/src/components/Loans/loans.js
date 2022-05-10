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
        };
    }
    componentDidMount(){
        
        axios.post("http://localhost:5000/api/database",{
            type: "MoneyLended",
            userid: window.sessionStorage.getItem("userid"), 
            method: "GET",
        }).then((res) => {
            if(res.data.success===true){
                axios.post("http://localhost:5000/api/database",{
                    type: "MoneyBorrowed",
                    userid: window.sessionStorage.getItem("userid"), 
                    method: "GET",
                }).then((res1) => {
                    if(res1.data.success===true){
                        var flag = (res.data.message===[]?false:true);
                        this.setState({
                            data: res.data.message,
                            data1: res1.data.message,
                            DataisLoaded: flag,
                            Data1isLoaded: res1.data.message===[]?!flag:flag,
                        });
                        return true;
                    }
                });
                return true;
            }    
        }); 
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
                        <OfferCard bidder={item.lender} amount={item.amount} interestrate={item.interestrate} time={item.time} finaldate={(day + "-"+  month +"-" + year)}/>
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
                        <Lcard borrower={item.borrower} amount={item.amount} interestrate={item.interestrate} time={item.time} date={(day + "-"+  month +"-" + year)} needbutton = {false} />
                    </>);
                })
            }
            </>
        );
        if(!this.state.DataisLoaded && !this.state.Data1isLoaded)
        {
            return(<>
            <h3>Data is loading...</h3>
            </>)
        }
        else if(this.state.DataisLoaded && this.state.Data1isLoaded )
        {
            return renderElement;
        }
        return (<>No data available.</>)
        
    }
}

export default Loans;