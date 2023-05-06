import axios from "axios";

import { BASE_URL } from "../utils/system";

export const findAll = () => {
  return axios.get(`${BASE_URL}/products?size=12`);
};

export const findById = (id: number) => {
  return axios.get(`${BASE_URL}/products/${id}`);
};
