export const formatZodError = (err) => {
    return err.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
    }));
};
export class HttpError extends Error {
    constructor(status, message, details) {
        super(message);
        this.status = status;
        this.details = details;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export function errorHandler(err, 
//req: Request,
res) {
    if (err instanceof HttpError) {
        res
            .status(err.status)
            .send({ message: err.message, error: err.details ?? null });
        return;
    }
    if (err instanceof Error) {
        res.status(500).json(err.message);
        return;
    }
    res.status(500).json("Error unknown");
}
//# sourceMappingURL=errorHandler.js.map