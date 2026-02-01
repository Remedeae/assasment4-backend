import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errorHandler";
const jwt = require("jsonwebtoken");

export const requiresAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new HttpError(401, "No token provided", null);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};
