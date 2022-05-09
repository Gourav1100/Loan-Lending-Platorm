import react from "react";
import {
    Row,
    Col,
    Container,
} from "react-bootstrap";
import OfferCard from "../offercard/offercard.js";



class Offer extends react.Component {
    render(props){
        
        return(
            <>
            <Container>
                <br></br>
                <h3 className="p-2" >Your Offers</h3>
                <OfferCard needbutton = {true}/>
                </Container>
            </>
        );
    }
}

export default Offer;