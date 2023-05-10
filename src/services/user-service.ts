import { requestBackend } from "../utils/request";
import * as authService from "./auth-service";

export const findMe = (id: number) => {
  const headers = {
    Authorization: "Bearer " + authService.getAccessToken(),
  };
  console.log(headers);
  return requestBackend({ url: `/users/${id}`, headers: headers });
};
