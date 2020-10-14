import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";

const mapState = ({ auth: { user } }: State) => ({ user });

const mapDispatch = (dispatch: any) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
  openModal: () => dispatch({ type: "SET_MODAL_STATE" }),
});
export default connect(mapState, mapDispatch)(NavBar);
