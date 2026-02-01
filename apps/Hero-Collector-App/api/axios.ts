import axios, { type Method } from "axios";
import { HttpError } from "../../Backend/src/middleware/errorHandler";
import { backendURL } from "@heroapp/shared";
import { useAuthStore } from "../src/storage/authStore";

export const api = async <T>(
  method: Method,
  url: string,
  body?: unknown,
): Promise<T> => {
  try {
    const token = useAuthStore.getState().token;
    const response = await axios({
      method,
      url: `${backendURL}${url}`,
      data: body,
      withCredentials: true,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    throw new HttpError(500, "Failed to fetch data.", error);
  }
};
