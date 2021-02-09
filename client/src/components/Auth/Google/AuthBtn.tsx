import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";
import "./authBtn.scss";

const AuthBtn = ({ action }: { action: string }) => {
  const onSuccess = (res: any): void => {
    console.log(res.getBasicProfile());
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
    >
      <p id="googleAuth-btn-text">{action} with Google</p>
    </GoogleLogin>
  );
};

export default AuthBtn;
