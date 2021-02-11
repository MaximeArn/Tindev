import { connect } from "react-redux";
import GoogleAuthBtn from "../Auth/Google/AuthBtn";

import { AnyAction } from "redux";
import { Dispatch } from "react";
import { State } from "../../models/states";

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  googleLogin: (tokenId: string) => {
    dispatch({ type: "auth/googleLogin", tokenId });
  },
  googleRegister: (tokenId: string) => {
    dispatch({ type: "auth/googleRegister", tokenId });
  },
});

export default connect(null, mapDispatch)(GoogleAuthBtn);
