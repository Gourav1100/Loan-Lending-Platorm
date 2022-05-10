import react from "react";
import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";

class OfferCard extends react.Component {

  constructor(props){
    super(props);
    this.state = {
        data: [],
        DataisLoaded: false,
    };
}

    clicked = () =>{
      axios.post("http://localhost:5000/api/payemi",{
        method: "POST",
        _id :  "6279888a98beec463ca61ee8", //(window.sessionStorage.getItem("_id")),
    }).then((res) => {

    this.setState({
            data: res.data.message,
            DataisLoaded: true,
        })
    });
    alert("Your emi is paid");
    }
  render(props) { 
      let content;  
      if(this.props.needbutton){
          content = <div className="center">
          <button className="button_bg p-2 m-3"><h5>Accept</h5></button>
          <button className="button_bg p-2 m-3"><h5>Reject</h5></button>
          </div>;
      }else{
          content = <div className="">
          <button className="button_bg p-2 m-3" onClick={this.clicked}><h5>Pay EMI</h5></button>
          </div>;
      }
    return (
      <>
      <Container>
        <Card className="blue">
          <Card.Header as="h5"></Card.Header>
          <Card.Body>
            <Card.Title>
              {this.props.offerid}
            </Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Bidder</th>
                    <th>Amount (INR)</th>
                    <th>Interest Rate (%)</th>
                    <th>Borrowing Period (yrs)</th>
                    <th>Proposal Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.bidder}</td>
                    <td>{this.props.amount}</td>
                    <td>{this.props.interestrate}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.finaldate}</td>
                  </tr>
                </tbody>
              </Table>
              {content}
            </Card.Text>
          </Card.Body>
        </Card>
        </Container>
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default OfferCard;
