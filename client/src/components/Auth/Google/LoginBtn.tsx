import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";

const LoginBtn = () => {
  const onSuccess = (res: any): void => {
    console.log(res);
  };

  const onError = (res: any): void => {
    console.log(res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onError}
    />
  );
};

export default LoginBtn;
