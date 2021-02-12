export interface InvalidToken {
  status: boolean;
  message?: string;
}

export interface OAuth2Token {
  access_token: string;
  authuser: number;
  expires_in: number;
  prompt: string;
  scope: string;
  state: string;
  token_type: string;
}
