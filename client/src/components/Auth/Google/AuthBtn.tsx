import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";
import refreshToken from "../../../utils/refrshToken";
import "./authBtn.scss";

const AuthBtn = ({ action }: { action: string }) => {
  const onSuccess = (res: any): void => {
    console.log(res.profileObj);
    console.log(res.tokenObj);
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
      style={{ textAlign: "center" }}
      redirectUri="https://localhost:8080/users"
    >
      <p id="googleAuth-btn-text">{action} with Google</p>
    </GoogleLogin>
  );
};

export default AuthBtn;
