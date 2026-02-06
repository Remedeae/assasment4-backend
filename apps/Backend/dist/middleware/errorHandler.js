import logger from "../logger.js";
export class HttpError extends Error {
    constructor(status, message, details, source) {
        super(message);
        this.status = status;
        this.details = details;
        this.source = source;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export function errorHandler(err, 
//req: Request,
res) {
    if (err instanceof HttpError) {
        const responseBody = {
            message: err.message,
            error: err.details ?? [],
        };
        if (err.status >= 500) {
            logger.error(responseBody);
        }
        else {
            logger.warn(responseBody);
        }
        res.status(err.status).json(responseBody);
        return;
    }
    if (err instanceof Error) {
        res.status(500).json({ message: err.message });
        logger.error(err.message);
        return;
    }
    res.status(500).json({ message: "Error unknown" });
}
//# sourceMappingURL=errorHandler.js.map