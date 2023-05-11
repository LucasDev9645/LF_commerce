import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export const findMe = (id: number) => {
  const config: AxiosRequestConfig = {
    url: `/users/${id}`,
    withCredentials: true,
  };
  return requestBackend(config);
};
