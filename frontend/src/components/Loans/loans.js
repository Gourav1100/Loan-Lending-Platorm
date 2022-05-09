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
        axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
            type: "MoneyLended",
            userid: window.sessionStorage.getItem("userid"), 
            method: "GET",
        }).then((res) => {

        this.setState({
                data: res.data.message,
                DataisLoaded: true,
            })
        });

        axios.post("http://loanlendingplatform.centralindia.cloudapp.azure.com:5000/api/database",{
            type: "MoneyBorrowed",
            userid: window.sessionStorage.getItem("userid"), 
            method: "GET",
        }).then((res) => {
            this.setState({
                data1: res.data1.message,
                Data1isLoaded: true,
            })
        });
        console.log(this.state.data);
        console.log(this.state.data1);
        
    }

    

    render(props){
        
        return(
            <>
            <h3 className="p-2 mt-4" >Money Lended</h3>
            <Lcard />
            <h3 className="p-2 mt-4">Money Borrowed</h3>
            <OfferCard />
            </>
        );
    }
}

export default Loans;