import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AuthModalOpening } from "../../models/modal";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { OwnProps } from "../../models/connect";

const mapState = ({
  auth: { user },
  search: { search, focused, results },
  navbar: { account, mobile, main, hasBeenSuspended, isTokenInvalid },
  notifications: {
    notifications: { counter },
    tray,
  },
}: State) => ({
  user,
  search,
  focused,
  results,
  account,
  mobile,
  main,
  counter,
  tray,
  hasBeenSuspended,
  isTokenInvalid,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => {
  history.listen(() => setSearchBarStatus(false));

  const setSearchBarStatus = (focused: boolean) => {
    console.log("STATUS : ", focused);
    dispatch({ type: "SET_SEARCH_BAR_FOCUS_STATUS", focused });
  };

  return {
    setSearchBarStatus,
    logout: () => dispatch({ type: "DISCONNECT_USER", history }),
    setTrayStatus: () => {
      dispatch({ type: "RESET_NOTIFICATION_COUNTER" });
      dispatch({ type: "SET_TRAY_STATUS" });
    },
    openModal: ({ modalStatus, modal }: AuthModalOpening) =>
      dispatch({ type: "SET_AUTH_MODAL_STATUS", modalStatus, modal }),
    getSearchValue: (value: string) => {
      dispatch({ type: "GET_SEARCH_VALUE", value });
      dispatch({ type: "GET_SEARCH_RESULTS" });
    },
    setAccountMenu: (status: React.MouseEvent<HTMLElement> | null) =>
      dispatch({ type: "SET_ACCOUNT_MENU", status }),
    setMobileMenu: (status: React.MouseEvent<HTMLElement> | null) =>
      dispatch({ type: "SET_MOBILE_MENU", status }),
    setMainMenu: (status: React.MouseEvent<HTMLElement> | null) =>
      dispatch({ type: "SET_MAIN_MENU", status }),
    redirectUser: (message: string) =>
      dispatch({ type: "DISCONNECT_USER", message, history }),
  };
};

export default withRouter(connect(mapState, mapDispatch)(NavBar));
