import { HttpError } from "./errorHandler.js";
const formatZodError = (err) => {
    return err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
    }));
};
export const validateData = (data, dataSchema, err) => {
    const valitedData = dataSchema.safeParse(data);
    if (!valitedData.success) {
        console.log(valitedData.error);
        throw new HttpError(err?.status ?? 500, err?.msg ?? "Unknown error", formatZodError(valitedData.error), "validateData");
    }
    return valitedData.data;
};
const dataOut0 = {
    status: 500,
    msg: "Invalid response from database.",
};
const url1 = { status: 400, msg: "Bad Request: Invalid url" };
const params2 = { status: 400, msg: "Bed Request: Invalid parameter input" };
const body3 = { status: 400, msg: "Bed Request: Invalid body input" };
const notFound4 = { status: 404, msg: "Data not found" };
export const errMsg = [
    dataOut0,
    url1,
    params2,
    body3,
    notFound4,
];
//# sourceMappingURL=validatorHelpes.js.map