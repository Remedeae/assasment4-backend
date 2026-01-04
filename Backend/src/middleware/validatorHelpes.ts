import z from "zod";

export const validateData = <S extends z.ZodTypeAny>(
  data: unknown,
  dataSchema: S,
  errMsg: string | undefined
): z.infer<S> => {
  const valitedData = dataSchema.safeParse(data);
  if (!valitedData.success) {
    throw new Error(`${errMsg}, Error:${valitedData.error}`);
  }
  return valitedData.data;
};

const dataOut0 = "Invalid response from database.";
const url1 = "Invalid url";
const params2 = "Invalid parameter input";
const body3 = "Invalid body input";

export const errMsg: string[] = [dataOut0, url1, params2, body3];
