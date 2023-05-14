import { AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/request";

export const findPageRequest = (
  page: number,
  name: string,
  size = 12,
  sort = "name"
) => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page: page,
      name: name,
      size: size,
      sort: sort,
    },
  };

  return requestBackend(config);
};

export const findById = (id: number) => {
  return requestBackend({ url: `/products/${id}` });
};

export const deleteById = (id: number) => {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/products/${id}`,
    withCredentials: true,
  };
  return requestBackend(config);
};
