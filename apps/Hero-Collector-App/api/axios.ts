import axios, { type Method } from "axios";
import { backendURL } from "./urls";
import { ApiError } from "./errorHandler";

export const api = async <T>(
  method: Method,
  url: string,
  body?: unknown,
): Promise<T> => {
  try {
    const response = await axios({
      method,
      url: `${backendURL}${url}`,
      data: body,
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new ApiError(error.response?.status || 500, error.message, error);
    }
    throw new ApiError(500, "Uknown error", error);
  }
};
