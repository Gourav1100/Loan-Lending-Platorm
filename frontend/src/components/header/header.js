import react from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";
import img from "../../icons/logo.png";

class Header extends react.Component {
    render(props){
        var links = {};
        console.log(window.sessionStorage.getItem("userid"));
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
                        <Navbar.Brand href="#home"> <img src={img} /> Lending Platform</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                Object.keys(links).map(item => {
                                    return (
                                        <Nav.Link href={links[item]}>{item}</Nav.Link>
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
