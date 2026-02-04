import type { /* Request, */ Response /* NextFunction */ } from "express";
import logger from "../logger";

export class HttpError extends Error {
  status: number;
  details?: unknown;

  constructor(status: number, message: string, details: unknown) {
    super(message);
    this.status = status;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function errorHandler(
  err: unknown,
  //req: Request,
  res: Response,
  //next: NextFunction,
) {
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
