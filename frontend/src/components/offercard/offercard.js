import react from "react";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class OfferCard extends react.Component {
  render(props) { 
      let content;  
      if(this.props.needbutton){
          content = <div className="center">
          <button className="button_bg p-2 m-3"><h5>Accept</h5></button>
          <button className="button_bg p-2 m-3"><h5>Reject</h5></button>
          </div>;
      }else{
          content = <div className="">
          <button className="button_bg p-2 m-3"><h5>Pay EMI</h5></button>
          </div>;
      }
    return (
      <>
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
                    <th>Amount</th>
                    <th>Interest Rate</th>
                    <th>Borrowing Period</th>
                    <th>Disposal Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.lender}</td>
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
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default OfferCard;
