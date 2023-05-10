import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export const requestBackend = (config: AxiosRequestConfig) => {
  return axios({ ...config, baseURL: BASE_URL });
};
