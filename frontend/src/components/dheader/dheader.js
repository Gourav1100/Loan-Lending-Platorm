import react from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./dheader.css";
import Header from "../../components/header/header";
import img from "../../icons/loan.png";
import profile from "../../icons/profile.png";
import notification from "../../icons/notification.png";



class Dheader extends react.Component {
    render(props){
        if ( window.sessionStorage.getItem("userid") === null || window.sessionStorage.getItem("userid") === "" ){
            // window.location.replace("/");
        }
        
        return (
            <div className ="header" >
                <Navbar bg = "dark" expand = "lg" variant = "dark" className="p-3">
                    <Container fluid>
                        <Navbar.Brand className="rt" href="/home"> <img className="logo " src={img} /> <span className="p-2 ">Lending Platform</span> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        </Navbar.Collapse>
                        <Nav className="dlinks">
                            {/* <Nav.Link>Hey, {this.props.username} !</Nav.Link> */}
                            <Nav.Link href="/dashboard"> <img src = {notification} className="img_size"></img></Nav.Link>
                            <Nav.Link href="/">Hey, {this.props.username} !<img src = {profile} className="img_size"></img></Nav.Link>
                        </Nav>
                       
                    </Container>
                </Navbar>
                
            </div>
        );
    }
}

export default Dheader;
