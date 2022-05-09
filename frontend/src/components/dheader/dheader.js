import react from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./dheader.css";
import img from "../../icons/loan.png";
import profile from "../../icons/profile.png";
import notification from "../../icons/notification.png";

class Dheader extends react.Component {
  opennotification = () => {
    document.getElementById("controlled-tab-tab-contact").click();
  };
  render(props) {
    if (
      window.sessionStorage.getItem("userid") === null ||
      window.sessionStorage.getItem("userid") === ""
    ) {
    }

    return (
      <div className="header">
        <Navbar bg="dark" expand="sm" variant="dark" className="p-3">
          <Container fluid>
            <Navbar.Brand className="rt" href="/home">
              {" "}
              <img className="logo " src={img} />{" "}
              <span className="p-2 ">Lending Platform</span>{" "}
            </Navbar.Brand>
            <Nav className="dlinks">
              <Nav.Link onClick={this.opennotification}>
                <img src={notification} className="img_size"></img>
              </Nav.Link>
              <Nav.Link href="/dashboard">
                Hey, <b>{this.props.username}</b> !
                <img src={profile} className="img_size"></img>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Dheader;
