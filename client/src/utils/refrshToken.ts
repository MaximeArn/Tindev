type AuthResType = { tokenObj: any; reloadAuthResponse: any };

export default (res: AuthResType) => {
  let refreshDelay: number = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const { expires_in } = await res.reloadAuthResponse();
    refreshDelay = (expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshDelay);
  };

  setTimeout(refreshToken, refreshDelay);
  refreshToken();
};
