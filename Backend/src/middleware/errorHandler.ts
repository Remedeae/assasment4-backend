import type { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Error) {
    res.status(500).json(err.message);
    return;
  }
  res.status(500).json("Error unknown");
}
