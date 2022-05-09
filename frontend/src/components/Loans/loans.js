import react from "react";
import {
    Card,
    Table,
    Container,
} from "react-bootstrap";
import Lcard from "../lcard/lcard.js";
import OfferCard from "../offercard/offercard.js";
import RequestCard from "../request_card/request_card.js";



class Loans extends react.Component {
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