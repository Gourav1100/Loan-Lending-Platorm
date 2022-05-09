import react from "react";
import "./request.css";
import {
    Row,
    Col,
    Container,
} from "react-bootstrap";
import RequestCard from "../../components/request_card/request_card.js"
import Newrequest from "../../components/newrequest/newrequest";



class Request extends react.Component {
    state = {
        visible : false,
    };
    
    render(props){
        const check = this.state.visible ? <Newrequest /> : <RequestCard />;
        const bt_text = this.state.visible ? "See Previous Requests" : "Create new request";
        const show = this.state.visible ? null : "Your previous Requests";
        
        return(
            <>
            <Container>
                <Row>
                    <Col  className="center p-2">
                    <button className="button_bg p-3 m-4" onClick={ () => {
                         this.setState({visible: !this.state.visible});
                     }}
                      >
                        <h5>{bt_text}</h5>
                    </button>
                    <hr className="h_break"></hr>
                    </Col>
                </Row>
                <h3 className="p-2" >{show}</h3>
                {check}
                <br></br>
                
                
                
            </Container>
            </>
        );
    }
}

export default Request;