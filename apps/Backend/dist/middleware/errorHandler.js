import logger from "../logger";
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
        const errorMsg = { message: err.message, error: err.details ?? null };
        res.status(err.status).send(errorMsg);
        if (err.status >= 500) {
            logger.error(errorMsg);
            return;
        }
        logger.warn({
            message: err.message,
            error: err.details,
        });
        return;
    }
    if (err instanceof Error) {
        res.status(500).json(err.message);
        logger.error(err.message);
        return;
    }
    res.status(500).json("Error unknown");
}
//# sourceMappingURL=errorHandler.js.map