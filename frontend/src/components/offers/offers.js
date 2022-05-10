import OfferCard from "../offercard/offercard.js";
import react from "react";
import axios from "axios";
import {
    Row,
    Col,
    Container,
} from "react-bootstrap";




class Offer extends react.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            DataisLoaded: false,
        };
    }
    componentDidMount(){
        axios.post("http://localhost:5000/api/database",{
            type: "LoanOffer",
            method: "GET",
        }).then((res) => {
            if(res.data.success===true){    
                this.setState({
                    data: res.data.message,
                    DataisLoaded: true,
                });
                return true;    
            }
        });
    }
    render(props){
        const {data, DataisLoaded} = this.state;
        if(!DataisLoaded){
            return (<><h3>Data is loading...</h3></>)
        }
        return(
            <>
            <br></br>
                <h3 className="p-2" >Your Offers</h3>
            <Container>
            {
                data.map((item)=>{
                    return (<>
                        <OfferCard bidder={item.lender} amount={item.amount} interestrate={item.interestrate} time={item.time} date={item.date} needbutton={true} />
                    </>);
                })
                
            }
            </Container>
        
            </>
            
        );
    }
}

export default Offer;