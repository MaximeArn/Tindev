import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ auth: { user } }: State) => ({ user });

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
  openModal: (modalStatus: boolean) => {
    dispatch({ type: "SET_AUTH_MODAL_STATE", modalStatus });
  },
});
export default connect(mapState, mapDispatch)(NavBar);
