import react from "react";
import NotificationCard from "../notification_card/notification_card";

class Notifications extends react.Component {
  render(props) {
    return (
      <>
        <h2 className="m-2 p-2 center">Your Notifications</h2>
        <hr className="h_break"></hr>
        <NotificationCard />
      </>
    );
  }
}

export default Notifications;
