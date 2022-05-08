import react from "react";
import "./profile.css";
import {
  Row,
  Col,
  Container,
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
            <img src={profile} className="fit center"></img>
          </Col>
          <Col className=" p-2 mt-2">
            <h1 className="center">Personal Details</h1>
            <hr className="h_break"></hr>
            <br></br>
            <h3>
              Name{this.tab}
              {this.tab}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.name}
            </h3>
            <h3>
              Username{this.tab}:{this.tab}
              {this.tab}
              {this.props.username}
            </h3>
            <h3>
              Phone{this.tab}
              {this.tab}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.phone}
            </h3>
            <h3>
              Email{this.tab}
              {this.tab}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.Email}
            </h3>
            <h3>
              Address{this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.address}
            </h3>
            <h3>
              Country{this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.country}
            </h3>
            <br></br>
            <br></br>
            <hr className="h_break"></hr>
            <h1 className="center">Bank Details</h1>
            <hr className="h_break"></hr>
            <br></br>
            <h3>
              Aadhar Number{this.tab}:{this.tab}
              {this.tab}
              {this.props.aadhar}
            </h3>
            <h3>
              PAN Number{this.tab}
              {this.four_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.pan}
            </h3>
            <h3>
              Bank{this.tab}
              {this.tab}
              {this.tab}
              {this.tab}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.bank}
            </h3>
            <h3>
              Branch{this.tab}
              {this.tab}
              {this.tab}
              {this.four_space}:{this.tab}
              {this.tab}
              {this.props.branch}
            </h3>
            <h3>
              IFSC Code{this.tab}
              {this.tab}
              {this.two_space}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.ifsc}
            </h3>
            <h3>
              CTC{this.tab}
              {this.tab}
              {this.tab}
              {this.tab}
              {this.two_space}
              {this.two_space}:{this.tab}
              {this.tab}
              {this.props.ctc}
            </h3>
            <br></br>
            <br></br>
            <hr className="h_break"></hr>
            <h1 className="center">Loan Details</h1>
            <hr className="h_break"></hr>
            <h3>
              Active Loans{this.tab}
              {this.tab}
              {this.two_space}
              {this.one_space}:{this.tab}
              {this.tab}
              {this.props.activeloans}
            </h3>
            <h3>
              Completed Loans{this.tab}:{this.tab}
              {this.tab}
              {this.props.completedloans}
            </h3>
            <h3>
              Offered Loans{this.tab}
              {this.tab}:{this.tab}
              {this.tab}
              {this.props.offeredloans}
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
