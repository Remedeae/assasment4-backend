import z, { ZodError } from "zod";
import { HttpError } from "./errorHandler.js";

const formatZodError = (err: ZodError) => {
  return err.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));
};

type ErrorReturnSchema = {
  status: number;
  msg: string;
};

export const validateData = <S extends z.ZodTypeAny>(
  data: unknown,
  dataSchema: S,
  err: ErrorReturnSchema | undefined,
): z.infer<S> => {
  const valitedData = dataSchema.safeParse(data);
  if (!valitedData.success) {
    throw new HttpError(
      err?.status ?? 500,
      err?.msg ?? "Unknown error",
      formatZodError(valitedData.error),
    );
  }
  return valitedData.data;
};

const dataOut0: ErrorReturnSchema = {
  status: 500,
  msg: "Invalid response from database.",
};
const url1 = { status: 400, msg: "Bad Request: Invalid url" };
const params2 = { status: 400, msg: "Bed Request: Invalid parameter input" };
const body3 = { status: 400, msg: "Bed Request: Invalid body input" };
const notFound4 = { status: 404, msg: "Data not found" };

export const errMsg: ErrorReturnSchema[] = [
  dataOut0,
  url1,
  params2,
  body3,
  notFound4,
];
