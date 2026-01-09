import type { Request, Response, NextFunction } from "express";
import { ZodError } from "../../../Shared/node_modules/zod";

export const formatZodError = (err: ZodError) => {
  return err.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));
};

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
  req: Request,
  res: Response,
  next: NextFunction
) {
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
