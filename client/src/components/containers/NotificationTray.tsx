import { connect } from "react-redux";
import { State } from "../../models/states";
import NotificationTray from "../Notifications/NotificationsTray";

const mapState = ({
  notifications: {
    notifications: { tooltips },
  },
}: State) => ({
  tooltips,
});

export default connect(mapState)(NotificationTray);
