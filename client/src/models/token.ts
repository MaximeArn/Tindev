import { User } from "./users";

export interface InvalidToken {
  status: boolean;
  message?: string;
}

export interface OAuth2AuthorizationResponse {
  authorization_code: string;
  authuser: number;
  expires_in: number;
  prompt: string;
  scope: string;
  state: string;
  token_type: string;
}

export interface GoogleProcessProps {
  verifyAuthorizationCode: Function;
}

export interface GoogleAPITokenResponse {
  email: string;
  username: string;
  role: string;
  authType: string;
}
