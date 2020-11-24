import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { State } from "../../models/states";
import NotificationTray from "../Notifications/NotificationsTray";

const mapState = ({
  notifications: {
    notifications: { tooltips },
  },
}: State) => ({
  tooltips,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setTrayStatus: () => dispatch({ type: "SET_TRAY_STATUS" }),
  deleteNotification: (id: string) =>
    dispatch({ type: "DELETE_NOTIFICATION", id }),
});

export default connect(mapState, mapDispatch)(NotificationTray);
