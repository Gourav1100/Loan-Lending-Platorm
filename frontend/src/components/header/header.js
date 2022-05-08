import react from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";
import img from "../../icons/loan.png";

class Header extends react.Component {
    render(props){
        var links = {};
        if ( window.sessionStorage.getItem("userid") === null || window.sessionStorage.getItem("userid") === "" ){
            links = {
                "Home"      :   '/home',
                "Login"     :   '/login',
                "Market"    :   '/market',
            };
        }
        else{
            links = {
                "Home"      :   '/home',
                "Dashboard" :   '/dashboard',
                "Market"    :   '/market',
            }
        }
        return (
            <div className ="header" >
                <Navbar bg = "dark" expand = "lg" variant = "dark" className="p-3">
                    <Container fluid>
                        <Navbar.Brand href="/home"> <img className="logo" src={img} /> <span className="p-2">Lending Platform</span> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                Object.keys(links).map(item => {
                                    return (
                                        <Nav.Link href={links[item]} className="p-2">{item}</Nav.Link>
                                    );
                                })
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;
