import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (token && process.env.SECRET) {
    try {
      const verifiedUser = jwt.verify(token, process.env.SECRET);
      console.log("Verified User:", verifiedUser);
      (req as any).user = verifiedUser;
    } catch (error) {
      console.log("Invalid token:", error);
    }
  }
  next();
};
