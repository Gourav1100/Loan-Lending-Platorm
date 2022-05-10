import react from "react";
import "./profile.css";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Stack
} from "react-bootstrap";
import profile from "../../icons/profile.png";

class Profile extends react.Component {
  tab = (<>&ensp;&emsp;</>);
  two_space = (<>&ensp;</>);
  one_space = (<>&nbsp;</>);
  four_space = (<>&emsp;</>);
  render(props) {
    return (
      <Container>
        <Row>
          <Col md={{ span: 5 }} className="center mt-5 p-5">
            <img src= {this.props.image? this.props.image : profile} className="fit center"></img>
            <InputGroup className="mb-3 p-2">
                    <InputGroup.Text id="basic-addon1">Avatar </InputGroup.Text>
                    <FormControl
                      type="file"
                      name="avatar"
                      onChange={this.loadimages}
                      aria-label="sslips"
                      aria-describedby="basic-addon1"
                    />
                    <button
                    className="button_bg p-2"
                    type="submit">
                    Submit
                  </button>
                  </InputGroup>
          </Col>
          <Col className=" p-1 mt-2">
            <h1 className="center">Personal Details</h1>
            <hr className="h_break"></hr>
            <br></br>
            <h5>
              Name{this.tab}
              {this.tab}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.name}
            </h5>
            <h5>
              Username{this.tab}:{this.tab}
              {this.tab}
              {this.props.username}
            </h5>
            <h5>
              Phone{this.tab}
              {this.tab}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.phone}
            </h5>
            <h5>
              Email{this.tab}
              {this.tab}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.Email}
            </h5>
            <h5>
              Address{this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.address}
            </h5>
            <h5>
              Country{this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.country}
            </h5>
            <br></br>
            <br></br>
            <hr className="h_break"></hr>
            <h1 className="center">Bank Details</h1>
            <hr className="h_break"></hr>
            <br></br>
            <h5>
              Aadhar Number{this.tab}:{this.tab}
              {this.tab}
              {this.props.aadhar}
            </h5>
            <h5>
              PAN Number{this.tab}
              {this.four_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.pan}
            </h5>
            <h5>
              Bank{this.tab}
              {this.tab}
              {this.tab}
              {this.tab}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.bank}
            </h5>
            <h5>
              Branch{this.tab}
              {this.tab}
              {this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.branch}
            </h5>
            <h5>
              IFSC Code{this.tab}
              {this.tab}
              {this.two_space}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.ifsc}
            </h5>
            <h5>
              CTC{this.tab}
              {this.tab}
              {this.tab}
              {this.tab}
              {this.two_space}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.ctc}
            </h5>
            <br></br>
            <br></br>
            <hr className="h_break"></hr>
            <h1 className="center">Loan Details</h1>
            <hr className="h_break"></hr>
            <h5>
              Active Loans{this.tab}
              {this.tab}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.activeloans}
            </h5>
            <h5>
              Completed Loans{this.tab}:{this.tab}
              {this.tab}
              {this.props.completedloans}
            </h5>
            <br />
            <hr className = "h_break"></hr>
            <h1 className="center">Update Salary Slips</h1>
            <br />
            <form className="center">
            <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1">Salary Slip </InputGroup.Text>
                    <FormControl
                      type="file"
                      name="sslips"
                      onChange={this.loadimages}
                      aria-label="sslips"
                      aria-describedby="basic-addon1"
                      multiple
                    />
                    <button
                    className="button_bg p-2"
                    type="submit">
                    Submit
                  </button>
                  </InputGroup>


                  </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
