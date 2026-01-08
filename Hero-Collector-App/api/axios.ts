import axios, { type Method } from "axios";
import { baseURL } from "../../Shared/auth/urls";
import { HttpError } from "../../Backend/src/middleware/errorHandler";

export const api = async <T>(
  method: Method,
  url: string,
  body?: unknown
): Promise<T> => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}${url}`,
      data: body,
      withCredentials: true,
    });
    if (!response) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    throw new HttpError(500, "Failed to fetch data.", error);
  }
};
