import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AuthModalOpening } from "../../models/modal";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ auth: { user } }: State) => ({ user });

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
  openModal: ({ modalStatus, modal }: AuthModalOpening) => {
    dispatch({ type: "SET_AUTH_MODAL_STATUS", modalStatus, modal });
  },
});
export default connect(mapState, mapDispatch)(NavBar);
