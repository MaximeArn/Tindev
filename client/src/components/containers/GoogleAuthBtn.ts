import { connect } from "react-redux";
import GoogleauthBtn from "../Auth/Google/AuthBtn";

import { AnyAction } from "redux";
import { State } from "../../models/states";
import { Dispatch } from "react";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  googleLogin: (tokenId: string) => {
    dispatch({ type: "auth/googleLogin", tokenId });
  },
  googleRegister: (tokenId: string) => {
    dispatch({ type: "auth/googleRegister", tokenId });
  },
});

export default connect(null, mapDispatch)(GoogleauthBtn);
