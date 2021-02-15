import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";
import refreshToken from "../../../utils/refrshToken";
import "./authBtn.scss";

const AuthBtn = ({
  action,
  googleLogin,
  googleRegister,
}: {
  action: string;
  googleLogin: Function;
  googleRegister: Function;
}) => {
  const onSuccess = (res: any): void => {
    const { tokenId } = res;
    action === "Login" ? googleLogin(tokenId) : googleRegister(tokenId);
    // refreshToken(res);
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
      redirectUri="https://localhost:8080"
    >
      <p id="googleAuth-btn-text">{action} with Google</p>
    </GoogleLogin>
  );
};

export default AuthBtn;
