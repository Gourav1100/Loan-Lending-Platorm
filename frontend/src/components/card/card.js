import react from "react";
import { InputGroup, FormControl, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";

class Loancard extends react.Component {
  submit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/database",{
      method: "POST",
      type: "LoanOffer",
      lender:(window.sessionStorage.getItem("userid")),
      borrower:(this.props.borrower), 
      requestid : (this.props.requestid),
      amount: event.target.amount.value,
      interestrate: event.target.interestrate.value,
      time: event.target.borrowingperiod.value
    }).then((res)=>{
      if(res.data.success === true){
        alert("Loan Offer sent successfully !");
        window.location.reload();
        return true;
      }
    })
  }
  render(props) {
    return (
      <>
        <Card className="blue">
          <Card.Header as="h5"></Card.Header>
          <Card.Body>
            <Card.Title>{this.props.requestid}</Card.Title>
            <Card.Text>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Borrower</th>
                    <th>Amount</th>
                    <th>Interest Rate (%)</th>
                    <th>Borrowing Period</th>
                    <th>Date of post</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.borrower}</td>
                    <td>{this.props.amount}</td>
                    <td>{this.props.interestrate}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.date}</td>
                  </tr>
                  <tr>
                    <td></td>
                    
                    <td><InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name = "amount"
                        placeholder="Amount"
                        aria-label="Amount"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup></td>
                    <td><InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name= "interestrate"
                        placeholder="Interest Rate (%)"
                        aria-label="Interest Rate (%)"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup></td>
                    <td><InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name = "borrowingperiod"
                        placeholder="Borrowing Period (yrs)"
                        aria-label="Borrowing Period"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup></td>
                    <td>{this.props.date}</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <hr className=""></hr>
            <button className="button_bg p-2 mt-1" onClick={this.submit}>
              <h6>Place a Bid</h6>
            </button>
          </Card.Body>
        </Card> 
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default Loancard;
