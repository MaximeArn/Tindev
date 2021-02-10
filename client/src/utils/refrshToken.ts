type AuthResType = { tokenObj: any; reloadAuthResponse: any };

export default (res: AuthResType) => {
  console.log("first token ", res.tokenObj);
  let refreshDelay: number = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    const { expires_in, expires_at } = newAuthRes;
    const expirationDate = new Date(expires_at);
    console.log(expirationDate);

    // console.log(
    //   "refreshed token",
    //   `${expirationDate.getDay()}/${expirationDate.getHours()}/${expirationDate.getMinutes()}`
    // );
    refreshDelay = (expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshDelay);
  };
  //first execution with initial expires_in timestamp
  setTimeout(refreshToken, refreshDelay);
  refreshToken();
};
