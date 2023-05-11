import { getAccessTokenPayload } from "../services/auth-service";

export type CredentialsDTO = {
  username: string;
  password: string;
};

export type RoleEnum = " ROLE_OPERATOR" | " ROLE_ADMIN";

export type AccessTokenPayloadDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};
