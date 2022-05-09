import react from "react";
import "./dashboard.css";
import Dheader from "../../components/dheader/dheader.js";
import Header from "../../components/header/header.js";
import Profile from "../../components/profile/profile.js";
import Footer from "../../components/footer/footer.js";
import Request from "../../components/request/request.js";
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
import Notifications from "../../components/notifications/notifications";

class Dashboard extends react.Component {
  render() {
    return (
      <>
        <Dheader username = {window.sessionStorage.getItem("username")? window.sessionStorage.getItem("username") : "User"} />
        <Container className="bg-dark flex-column mt-2 p-2">
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="profile"
                id="controlled-tab"
                className="tabs"
              >
                <Tab eventKey="profile" title="Profile" className="tabs">
                  <Profile
                    name={window.sessionStorage.getItem("name")}
                    username={window.sessionStorage.getItem("username")}
                    phone={window.sessionStorage.getItem("phone")}
                    Email={window.sessionStorage.getItem("Email")}
                    address={window.sessionStorage.getItem("address")}
                    country={window.sessionStorage.getItem("country")}
                    aadhar={window.sessionStorage.getItem("aadhar")}
                    pan={window.sessionStorage.getItem("pan")}
                    bank={window.sessionStorage.getItem("bank")}
                    branch={window.sessionStorage.getItem("branch")}
                    ifsc={window.sessionStorage.getItem("ifsc")}
                    ctc={window.sessionStorage.getItem("ctc")}
                    activeloans={window.sessionStorage.getItem("activeloans")}
                    completedloans={window.sessionStorage.getItem("completedloans")}
                    offeredloans={window.sessionStorage.getItem("offeredloans")}
                  />
                </Tab>
                <Tab eventKey="home" title="Requests">
                  <Request />
                </Tab>
                <Tab eventKey="contact" title="Notifications" className="tabs">
                  <Notifications />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Dashboard;
