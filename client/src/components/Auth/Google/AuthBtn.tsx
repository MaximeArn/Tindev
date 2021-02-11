import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";
import refreshToken from "../../../utils/refrshToken";
import axios from "axios";
import "./authBtn.scss";

const AuthBtn = ({ action }: { action: string }) => {
  const onSuccess = (res: any): void => {
    action === "Register"
      ? axios
          .post("auth/googleRegister", res)
          .then(({ data }) => console.log(data))
          .catch((err) => console.error(err))
      : axios
          .post("auth/googleLogin", res)
          .then(({ data }) => console.log(data))
          .catch((err) => console.error(err));

    refreshToken(res);
  };

  const onError = ({ error }: { error: string; details?: string }): void => {
    console.error("google auth error :  ", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onError}
      redirectUri="https://localhost:8080/users"
    >
      <p id="googleAuth-btn-text">{action} with Google</p>
    </GoogleLogin>
  );
};

export default AuthBtn;
