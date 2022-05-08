import react from "react";
import "./request.css";
import {
    Row,
    Col,
    Container,
} from "react-bootstrap";
import RequestCard from "../../components/request_card/request_card.js"



class Request extends react.Component {
    render(props){
        return(
            <Container>
                <Row>
                    <Col  className="center p-2">
                    <button className="button_bg p-3 mt-4" >
                        <h5>Create new Request</h5>
                    </button>
                    </Col>
                </Row>
                <hr className="h_break"></hr>
                <br></br>
                <h3 className="p-2">Your previous Requests</h3>
                <br></br>
                <RequestCard />
            </Container>
        );
    }
}

export default Request;