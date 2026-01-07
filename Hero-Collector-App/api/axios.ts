import axios, { type Method } from "axios";
import { baseURL } from "../../Shared/auth/urls";

export const api = async <T>(
  method: Method,
  url: string,
  body?: unknown
): Promise<T> => {
  const response = await axios({
    method,
    url: `${baseURL}${url}`,
    data: body,
    withCredentials: true,
  });
  return response.data;
};
